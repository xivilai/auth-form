import React from "react";

import "./style.scss";
import logo from "@/assets/images/Evil-Martians-Logo.png";
import { ErrorMessage } from "../ErrorMessage/ErrorMessage";
import { useAuthForm } from "../../utils/auth";

function AuthForm() {
  const { authData, onSubmit, isError, error, isLoading, isSuccess } =
    useAuthForm();

  const titleText = isSuccess ? authData : "Join Evil Martians!";
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
            <form id="auth-form" action="/auth" onSubmit={onSubmit}>
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
