import React from "react";
import { useMutation } from "react-query";

import "./style.scss";
import logo from "@/assets/images/Evil-Martians-Logo.png";
import { ErrorMessage } from "../ErrorMessage/ErrorMessage";

interface FormData {
  email: string;
  password: string;
}

function AuthForm() {
  const createAccountMutation = async (formData: FormData) => {
    const response = await fetch("/auth", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.json();
  };

  const {
    mutate: mutateCreateAccount,
    data: createAccountResponse,
    isLoading,
    isError,
    isSuccess,
    error,
  } = useMutation(createAccountMutation);

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    const form = evt.target as HTMLFormElement;
    const email: string = form.email.value;
    const password: string = form.password.value;

    mutateCreateAccount({ email, password });
  };

  const titleText = isSuccess
    ? createAccountResponse.data
    : "Join Evil Martians!";
  const subtitleText = isSuccess ? (
    <span>
      Check out our blog:{" "}
      <a href="https://evilmartians.com/chronicles">evilmartians-chronicles</a>
    </span>
  ) : (
    "Embrace the interstellar chaos. Join us in our cosmic endeavors"
  );

  return (
    <div className="container">
      <div className="window">
        <div className="content">
          <img src={logo} className="logo" alt="evil martians logo" />

          <div className="form-text">
            <h1 className="title">{titleText}</h1>
            <p className="subtitle">{subtitleText}</p>
          </div>
          
          {!isSuccess && (
            <form id="auth-form" action="/auth" onSubmit={handleSubmit}>
              <div className="input-fields">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  autoComplete="email"
                  className="input-line"
                  required
                />
                <input
                  type="password"
                  name="password"
                  autoComplete="off"
                  placeholder="Password"
                  className="input-line"
                  required
                />
                <label className="terms-and-conditions">
                  <input type="checkbox" name="terms" id="terms" required />
                  <span>
                    I accept <a href="/terms">Terms &amp; Conditions</a>
                  </span>
                </label>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                form="auth-form"
                className="ghost-round"
              >
                {isLoading ? "Loading..." : "Create Account"}
              </button>

              <a href="/signIn" className="login">
                Login
              </a>
            </form>
          )}

          {/* @ts-ignore */}
          {isError && <ErrorMessage error={error.message} />}
        </div>
      </div>
    </div>
  );
}

export { AuthForm };
