import { CPFStepValues } from "@/schemas/loginSchema";

export interface CPFStepProps {
  onSubmit: (values: CPFStepValues) => void;
}
