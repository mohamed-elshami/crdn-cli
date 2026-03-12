import type { LoginPayload, LoginResponse, User } from "../types/auth.types";
import { post, get } from "@/lib/api/client";

const LOGIN_PATH = "/auth/login";
const ME_PATH = "/auth/me";
const LOGOUT_PATH = "/auth/logout";

export async function login(payload: LoginPayload): Promise<LoginResponse> {
  return post<LoginResponse, LoginPayload>(LOGIN_PATH, payload);
}

export async function getMe(): Promise<User> {
  return get<User>(ME_PATH);
}

export async function logout(): Promise<void> {
  await post(LOGOUT_PATH);
}
