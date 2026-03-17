describe("auth feature (barrel exports)", () => {
  it("exports public API", async () => {
    const auth = await import("@/features/auth");

    expect(auth).toHaveProperty("LoginForm");
    expect(typeof auth.LoginForm).toBe("function");

    expect(auth).toHaveProperty("useAuth");
    expect(typeof auth.useAuth).toBe("function");

    expect(auth).toHaveProperty("authKeys");
    expect(auth.authKeys).toBeTruthy();
  });
});
