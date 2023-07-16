import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";

import { AuthForm } from "@/components/AuthForm/AuthForm";

import "./assets/scss/main.scss";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthForm />
    </QueryClientProvider>
  );
}

export { App };
