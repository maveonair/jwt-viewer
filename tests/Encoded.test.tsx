import { render, screen } from "@testing-library/react";

import React from "react";
import Encoded from "../src/components/Encoded";

describe("Encoded", () => {
  it("renders token", () => {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImY1ODg5MGQxOSJ9.eyJhdWQiOiI4NWEwMzg2Ny1kY2NmLTQ4ODItYWRkZS0xYTc5YWVlYzUwZGYiLCJleHAiOjE2NDQ4ODQxODUsImlhdCI6MTY0NDg4MDU4NSwiaXNzIjoiYWNtZS5jb20iLCJzdWIiOiIwMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDEiLCJqdGkiOiIzZGQ2NDM0ZC03OWE5LTRkMTUtOThiNS03YjUxZGJiMmNkMzEiLCJhdXRoZW50aWNhdGlvblR5cGUiOiJQQVNTV09SRCIsImVtYWlsIjoiYWRtaW5AZnVzaW9uYXV0aC5pbyIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhcHBsaWNhdGlvbklkIjoiODVhMDM4NjctZGNjZi00ODgyLWFkZGUtMWE3OWFlZWM1MGRmIiwicm9sZXMiOlsiY2VvIl19.dee-Ke6RzR0G9avaLNRZf1GUCDfe8Zbk9L2c7yaqKME";

    render(
      <Encoded
        token={token}
        setToken={function (token: string | null): void {
          throw new Error("Function not implemented.");
        }}
      />
    );

    expect(screen.getByText(token)).toBeTruthy();
  });
});
