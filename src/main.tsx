import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AppRouter } from "./routes/routes.tsx";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./index.css";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ChakraProvider value={defaultSystem}>
        <AppRouter />
      </ChakraProvider>
    </QueryClientProvider>
  </StrictMode>
);
