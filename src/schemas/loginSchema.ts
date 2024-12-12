import { validateCPF } from "@/utils/cpf";
import { z } from "zod";

export const cpfStepSchema = z.object({
  cpf: z
    .string()
    .nonempty("Informe o seu CPF.")
    .refine((value) => validateCPF(value.replace(/\D/g, "")), "CPF inválido."),
  rememberCpf: z.boolean(),
});

export type CPFStepValues = z.infer<typeof cpfStepSchema>;

export const passwordStepSchema = z.object({
  password: z
    .string()
    .nonempty("Informe sua senha.")
    .min(6, "A senha deve ter pelo menos 8 caracteres ou mais."),
});

export type PasswordStepValues = z.infer<typeof passwordStepSchema>;
