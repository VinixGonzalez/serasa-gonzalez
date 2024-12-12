import logoMobile from "@/assets/serasa-logo-pink.svg";
import errorIcon from "@/assets/error-icon.svg";

import Button from "@/components/atoms/Button";
import Switch from "@/components/atoms/Switch";
import { cpfStepSchema, CPFStepValues } from "@/schemas/loginSchema";
import { applyCPFMask } from "@/utils/cpf";
import { Input } from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import { CPFStepProps } from "./CPFStep.types";

export const CPFStep: React.FC<CPFStepProps> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    setValue,
  } = useForm<CPFStepValues>({
    resolver: zodResolver(cpfStepSchema),
    defaultValues: {
      cpf: "",
      rememberCpf: false,
    },
  });

  const handleOnSubmit = (data: CPFStepValues) => {
    onSubmit(data);
  };

  const handleCPFChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value.replace(/\D/g, "");
    const maskedValue = applyCPFMask(rawValue);
    setValue("cpf", maskedValue, { shouldValidate: true });
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit(handleOnSubmit)} className="flex flex-col">
        <img
          className="lg:hidden"
          width={32}
          height={43}
          src={logoMobile}
          alt="logo serasa"
        />
        <div className="my-9 flex flex-col gap-4 w-full">
          <p className="text-2xl">Digite seu CPF</p>
          <Input
            {...register("cpf")}
            onChange={handleCPFChange}
            className={`h-12 py-3 px-4 text-base rounded-[10px] border  w-full ${
              errors.cpf ? "border-red-600" : "border-[#d4dae0]"
            }`}
            maxLength={14}
          />
          {errors.cpf && (
            <div className="flex items-center gap-2 font-bold text-[#d6103b] text-xs">
              <img src={errorIcon} alt="error icon" />
              <p>{errors.cpf.message}</p>
            </div>
          )}
        </div>

        <Controller
          control={control}
          name="rememberCpf"
          render={({ field }) => (
            <Switch
              className="flex items-center gap-6"
              size={"lg"}
              colorPalette={"pink"}
              name={field.name}
              checked={field.value}
              onCheckedChange={({ checked }) => field.onChange(checked)}
              inputProps={{ onBlur: field.onBlur }}
            >
              <p className="text-base font-normal leading-4 text-gray-600">
                Lembrar CPF para o próximo acesso
              </p>
            </Switch>
          )}
        />

        <Button
          disabled={!!errors.cpf}
          btnText="Continuar"
          className="my-20 h-12 rounded-lg bg-primary text-white font-bold disabled:bg-gray-300 disabled:text-gray-400"
        />
      </form>
      <section className="flex flex-col gap-6">
        <p className="text-center text-body-p text-[#00082680] tracking-normal">
          <a
            className="text-primary font-bold"
            href="https://empresas.serasaexperian.com.br/"
            target="_blank"
          >
            Veja aqui
          </a>{" "}
          soluções para a sua empresa.
        </p>
        <a
          className="text-sm text-[#00082690] font-bold text-center"
          href="https://www.serasa.com.br/app/politica-de-privacidade"
          target="_blank"
        >
          Termos de Uso e Política de Privacidade
        </a>
      </section>
    </div>
  );
};

export default CPFStep;
