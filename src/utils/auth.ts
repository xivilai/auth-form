import { useMutation } from "react-query";

interface FormData {
  email: string;
  password: string;
}

function useAuthForm() {
  const mutation = useMutation(createAccountMutation);

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    const form = evt.target as HTMLFormElement;
    const email: string = form.email.value;
    const password: string = form.password.value;

    mutation.mutate({ email, password });
  };

  return {
    onSubmit: handleSubmit,
    authData: mutation.data?.data || null,
    ...mutation,
  };
}

async function createAccountMutation(formData: FormData) {
  const response = await fetch("/auth", {
    method: "POST",
    body: JSON.stringify(formData),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response.json();
}

export { useAuthForm };
