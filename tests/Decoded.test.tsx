import { render, screen } from "@testing-library/react";

import Decoded from "../src/components/Decoded";

describe("Decoded", () => {
  it("renders header", () => {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImY1ODg5MGQxOSJ9.eyJhdWQiOiI4NWEwMzg2Ny1kY2NmLTQ4ODItYWRkZS0xYTc5YWVlYzUwZGYiLCJleHAiOjE2NDQ4ODQxODUsImlhdCI6MTY0NDg4MDU4NSwiaXNzIjoiYWNtZS5jb20iLCJzdWIiOiIwMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDEiLCJqdGkiOiIzZGQ2NDM0ZC03OWE5LTRkMTUtOThiNS03YjUxZGJiMmNkMzEiLCJhdXRoZW50aWNhdGlvblR5cGUiOiJQQVNTV09SRCIsImVtYWlsIjoiYWRtaW5AZnVzaW9uYXV0aC5pbyIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhcHBsaWNhdGlvbklkIjoiODVhMDM4NjctZGNjZi00ODgyLWFkZGUtMWE3OWFlZWM1MGRmIiwicm9sZXMiOlsiY2VvIl19.dee-Ke6RzR0G9avaLNRZf1GUCDfe8Zbk9L2c7yaqKME";
    render(<Decoded token={token} />);

    const headerEntries = [
      `"alg": "HS256"`,
      `"typ": "JWT"`,
      `"kid": "f58890d19"`,
    ];

    for (const entry of headerEntries) {
      expect(screen.getByText(new RegExp(entry, "i"))).toBeTruthy();
    }
  });

  it("renders payload", () => {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImY1ODg5MGQxOSJ9.eyJhdWQiOiI4NWEwMzg2Ny1kY2NmLTQ4ODItYWRkZS0xYTc5YWVlYzUwZGYiLCJleHAiOjE2NDQ4ODQxODUsImlhdCI6MTY0NDg4MDU4NSwiaXNzIjoiYWNtZS5jb20iLCJzdWIiOiIwMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDEiLCJqdGkiOiIzZGQ2NDM0ZC03OWE5LTRkMTUtOThiNS03YjUxZGJiMmNkMzEiLCJhdXRoZW50aWNhdGlvblR5cGUiOiJQQVNTV09SRCIsImVtYWlsIjoiYWRtaW5AZnVzaW9uYXV0aC5pbyIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhcHBsaWNhdGlvbklkIjoiODVhMDM4NjctZGNjZi00ODgyLWFkZGUtMWE3OWFlZWM1MGRmIiwicm9sZXMiOlsiY2VvIl19.dee-Ke6RzR0G9avaLNRZf1GUCDfe8Zbk9L2c7yaqKME";
    render(<Decoded token={token} />);

    const payloadEntries = [
      `"aud": "85a03867-dccf-4882-adde-1a79aeec50df"`,
      `"exp": 1644884185`,
      `"iat": 1644880585`,
      `"iss": "acme.com"`,
      `"sub": "00000000-0000-0000-0000-000000000001"`,
      `"jti": "3dd6434d-79a9-4d15-98b5-7b51dbb2cd31"`,
      `"authenticationType": "PASSWORD"`,
      `"email": "admin@fusionauth.io"`,
      `"email_verified": true`,
      `"applicationId": "85a03867-dccf-4882-adde-1a79aeec50df"`,
    ];

    for (const entry of payloadEntries) {
      expect(screen.getByText(new RegExp(entry, "i"))).toBeTruthy();
    }
  });
});
