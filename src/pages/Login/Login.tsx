import serasaLogo from "@/assets/serasa-logo-desk.png";

import ppl1 from "@/assets/ppl1.webp";
import ppl2 from "@/assets/ppl2.webp";
import ppl3 from "@/assets/ppl3.webp";
import ppl4 from "@/assets/ppl4.webp";
import ppl5 from "@/assets/ppl5.webp";

import { useMemo, useState } from "react";

import { CPFStepValues, PasswordStepValues } from "@/schemas/loginSchema";
import AnimatedText from "@/components/atoms/AnimatedText/AnimatedText";
import { SERASA_PHRASES } from "@/constants/serasa";
import { CPFStep } from "./components/organisms/CPFStep";
import { PasswordStep } from "./components/organisms/PasswordStep";
import { useAuth } from "@/hooks/useAuth";

type LoginSteps = "step-cpf" | "step-password";

export const Login = () => {
  const { login, isPending } = useAuth();

  const [loginStep, setLoginStep] = useState<LoginSteps>("step-cpf");

  const [cpf, setCpf] = useState("");

  const pplList = [ppl1, ppl2, ppl3, ppl4, ppl5];
  const randomPerson = useMemo(() => {
    return pplList[Math.floor(Math.random() * pplList.length)];
  }, []);

  const handleOnSubmitCPFStep = (values: CPFStepValues) => {
    setCpf(values.cpf);
    setLoginStep("step-password");
  };

  const handleOnSubmitPasswordStep = (values: PasswordStepValues) => {
    login({ cpf: cpf, password: values.password });
  };

  const renderStepMapper = (currentStep: LoginSteps) => {
    const mapper: { [k in LoginSteps]: React.ReactNode } = {
      "step-cpf": <CPFStep onSubmit={handleOnSubmitCPFStep} />,
      "step-password": (
        <PasswordStep
          onSubmit={handleOnSubmitPasswordStep}
          onClickBack={() => setLoginStep("step-cpf")}
          isLoading={isPending}
        />
      ),
    };
    return mapper[currentStep];
  };

  return (
    <main className="flex min-h-screen relative">
      <div className="hidden lg:block flex-1 lg:bg-primary p-16 max-w-[515px]">
        <img src={serasaLogo} alt="serasa logo" />
        <h1 className="text-title text-white mt-14">
          Na Serasa <br /> você pode
        </h1>
        <AnimatedText phrases={SERASA_PHRASES} />
      </div>
      <img
        className="hidden xl:block xl:absolute bottom-0 left-96 2xl:left-96 2xl:w-[500px]"
        width={440}
        height={800}
        src={randomPerson}
        alt="people"
      />
      <div className="max-w-[400px] lg:max-w-full mx-auto flex-1 lg:bg-[#f5f7f9] flex items-center justify-center">
        <div className="xl:ml-48 bg-white p-6 rounded-3xl lg:shadow-xl pb-16">
          {renderStepMapper(loginStep)}
        </div>
      </div>
    </main>
  );
};

export default Login;
