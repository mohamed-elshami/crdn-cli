import { authKeys } from "@/features/auth/keys";

describe("authKeys", () => {
  it("builds stable query keys", () => {
    expect(authKeys.root).toEqual(["auth"]);
    expect(authKeys.all()).toEqual(["auth"]);
    expect(authKeys.lists()).toEqual(["auth", "list"]);
    expect(authKeys.detail("me")).toEqual(["auth", "detail", "me"]);
  });
});

