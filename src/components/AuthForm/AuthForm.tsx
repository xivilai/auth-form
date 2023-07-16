import React from "react";

import styles from "./AuthForm.module.scss";
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
    <div className={styles.container}>
      <div className={styles.window}>
        <div className={styles.content}>
          <img src={logo} className={styles.logo} alt="evil martians logo" />

          <div className={styles["form-text"]}>
            <h1 className={styles.title}>{titleText}</h1>
            <p className={styles.subtitle}>{subtitleText}</p>
          </div>

          {!isSuccess && (
            <form id="auth-form" action="/auth" onSubmit={onSubmit}>
              <div className={styles["input-fields"]}>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  autoComplete="email"
                  className={styles["input-line"]}
                  required
                />
                <input
                  type="password"
                  name="password"
                  autoComplete="off"
                  placeholder="Password"
                  className={styles["input-line"]}
                  required
                />
                <label className={styles["terms-and-conditions"]}>
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
                className={styles["ghost-round"]}
              >
                {isLoading ? "Loading..." : "Create Account"}
              </button>

              <a href="/signIn" className={styles.login}>
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
