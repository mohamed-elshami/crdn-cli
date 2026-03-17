import * as authApi from "@/features/auth/api/authApi";

describe("authApi (smoke)", () => {
  it("exports expected functions", () => {
    expect(typeof authApi.login).toBe("function");
    expect(typeof authApi.getMe).toBe("function");
    expect(typeof authApi.logout).toBe("function");
  });
});

