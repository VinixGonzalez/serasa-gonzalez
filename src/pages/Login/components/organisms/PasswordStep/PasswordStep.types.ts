import { PasswordStepValues } from "@/schemas/loginSchema";

export interface PasswordStepProps {
  onSubmit: (values: PasswordStepValues) => void;
  onClickBack: () => void;
  isLoading?: boolean;
}
