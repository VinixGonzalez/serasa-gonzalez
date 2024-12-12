import { usePostData } from "@/hooks/usePostData";
import { useNavigate } from "react-router";

interface LoginResponse {
  token: string;
  user: { name: string };
}

interface LoginRequest {
  cpf: string;
  password: string;
}

export const useAuth = () => {
  const navigate = useNavigate();

  const {
    mutate: login,
    isPending,
    error,
  } = usePostData<LoginResponse, LoginRequest>("/login", {
    onSuccess: (data) => {
      localStorage.setItem("user-token", data.token);
      navigate("/area-cliente");
    },
    onError: (err) => {
      alert(
        "Erro no login. Para acessar, use o CPF: 37605287089, senha: 'password'"
      );
      console.error("Erro no login:", err);
    },
  });

  const logout = (): void => {
    localStorage.removeItem("user-token");
    navigate("/login");
  };

  return { login, isPending, error, logout };
};
