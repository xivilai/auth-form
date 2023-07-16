import React from "react";
import styles from "./ErrorMessage.module.scss";

function ErrorMessage({ error, ...props }) {
  return (
    <div role="alert" className={styles["error-message"]} {...props}>
      <span>There was an error: </span>
      <pre>{error.message}</pre>
    </div>
  );
}

export { ErrorMessage };
