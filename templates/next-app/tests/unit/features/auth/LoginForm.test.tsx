import React from "react";
import { render, screen } from "@testing-library/react";
import { LoginForm } from "@/features/auth/components/LoginForm";

jest.mock("@/features/auth/hooks/useAuth", () => ({
  useAuth: () => ({
    login: jest.fn(async () => undefined),
    isLoggingIn: false,
  }),
}));

describe("LoginForm", () => {
  it("renders", () => {
    render(<LoginForm />);

    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /sign in/i })).toBeInTheDocument();
  });
});

