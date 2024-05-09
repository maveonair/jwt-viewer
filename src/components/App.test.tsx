import { render, screen } from "@testing-library/react";

import App from "./App";

test("renders title =)", () => {
  render(<App />);
  const title = screen.getByText(/JWT Viewer/i);
  expect(title).toBeInTheDocument();

  const exampleToken = screen.getByLabelText("token-input");
  expect(exampleToken.textContent).toBe(
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
  );

  expect(exampleToken).toBeInTheDocument();
});
