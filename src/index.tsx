import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";

const root = createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Define a mock response object
const mockResponse = {
  data: "Welcome aboard martian!",
};

// Create a mock implementation of the fetch function
function fetchMock(url) {
  return new Promise((resolve, reject) => {
    // Simulate an asynchronous network request
    setTimeout(() => {
      resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse),
      });
    }, 2000);
  });
}

// Override the fetch function in the global scope
// @ts-ignore
window.fetch = fetchMock;