import React from 'react'
import './style.scss'

function ErrorMessage({ error, ...props }) {
  return (
    <div
      role="alert"
      className="error-message"
      {...props}
    >
      <span>There was an error: </span>
      <pre>{error.message}</pre>
    </div>
  );
}

export { ErrorMessage };
