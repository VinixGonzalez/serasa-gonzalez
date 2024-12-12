import errorIcon from "@/assets/error-icon.svg";

import { FaChevronLeft, FaEye, FaEyeSlash } from "react-icons/fa6";
import { Input } from "@chakra-ui/react";

import { useForm } from "react-hook-form";
import { passwordStepSchema, PasswordStepValues } from "@/schemas/loginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import Button from "@/components/atoms/Button";
import InputGroup from "@/components/atoms/InputGroup";
import { PasswordStepProps } from "./PasswordStep.types";

export const PasswordStep: React.FC<PasswordStepProps> = ({
  onSubmit,
  onClickBack,
  isLoading,
}) => {
  const [fieldType, setFieldType] = useState<"password" | "text">("password");

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<PasswordStepValues>({
    resolver: zodResolver(passwordStepSchema),
    defaultValues: {
      password: "",
    },
  });

  const pw = watch("password");

  const handleOnSubmit = (values: PasswordStepValues) => {
    onSubmit(values);
  };

  return (
    <div className="w-full flex flex-col gap-8 min-h-[500px]">
      <div>
        <button
          onClick={onClickBack}
          className="flex gap-2 items-center text-primary"
        >
          <FaChevronLeft />
          <p className="font-bold">Voltar</p>
        </button>
      </div>
      <p className="text-body-regular text-[#00082699]">
        Agora só falta digitar sua senha
      </p>
      <form
        className="flex flex-col w-full"
        onSubmit={handleSubmit(handleOnSubmit)}
      >
        <div className="flex flex-col gap-2">
          <InputGroup
            className="w-full"
            flex="1"
            endElement={
              fieldType === "text" ? (
                <FaEye
                  size={24}
                  onClick={() => setFieldType("password")}
                  className="cursor-pointer"
                />
              ) : (
                <FaEyeSlash
                  size={24}
                  onClick={() => setFieldType("text")}
                  className="cursor-pointer"
                />
              )
            }
          >
            <Input
              {...register("password")}
              placeholder="Possui 8 caracteres ou mais"
              minLength={8}
              type={fieldType}
              className={`h-12 py-3 px-4 text-base rounded-[10px] border w-full ${
                errors.password ? "border-red-600" : "border-[#d4dae0]"
              }`}
            />
          </InputGroup>
          {errors.password && (
            <div className="flex items-center gap-2 font-bold text-[#d6103b] text-xs">
              <img src={errorIcon} alt="error icon" />
              <p>{errors.password.message}</p>
            </div>
          )}
          <p className="text-primary font-bold cursor-pointer">
            Esqueci minha senha
          </p>
        </div>

        <div className="flex flex-col gap-2 mt-20">
          <Button
            disabled={!!errors.password || pw.length < 8 || isLoading}
            btnText={isLoading ? "Carregando..." : "Continuar"}
            className="h-12 rounded-lg bg-primary text-white font-bold disabled:bg-gray-300 disabled:text-gray-400"
          />
          <Button
            type="button"
            disabled={!!errors.password || isLoading}
            btnText="Entrar sem senha"
            className={`h-12 rounded-lg bg-white border border-[#d4dae0] text-primary font-bold disabled:bg-gray-300 disabled:text-gray-400 hover:border-primary`}
          />
        </div>
      </form>
    </div>
  );
};

export default PasswordStep;
