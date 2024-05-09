import { render, screen } from "@testing-library/react";

import App from "../src/components/App";

describe("App", () => {
  it("renders the defaults", () => {
    render(<App />);
    const title = screen.getByText(/JWT Viewer/i);
    expect(title).toBeTruthy();

    const exampleToken = screen.getByLabelText("token-input");
    expect(exampleToken.textContent).toBe(
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
    );

    expect(exampleToken).toBeTruthy();
  });
});
