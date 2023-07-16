import React from "react";
import "./style.scss";
import logo from "@/assets/images/Evil-Martians-Logo.png";

// удобную и красивую
// форму аутентификации через почту и пароль — но без готовых библиотек компонентов.
//  Нужно продумать отправку почты/пароля на сервер, но сервер можно не делать,
//  просто замокав `fetch()`

function AuthForm() {
  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    const form = evt.target as HTMLFormElement;
    const email: string = form.email.value;
    const password: string = form.password.value;

    fetch("/auth", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    })
      .then((response) => response.json())
      .then((response) => console.log(response));
  };

  return (
    <div className="container">
      <div className="window">
        <div className="content">
          <img src={logo} className="logo" alt="evil martians logo" />

          <div className="form-text">
            <h1 className="title">Join Evil Martians!</h1>
            <p className="subtitle">
              Embrace the interstellar chaos. Join us in our cosmic endeavors.
            </p>
          </div>

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

            <button type="submit" form="auth-form" className="ghost-round">
              Create Account
            </button>

            <a href="/signIn" className="signin">
              Login
            </a>
          </form>
        </div>
      </div>
    </div>
  );
}

export { AuthForm };
