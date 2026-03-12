"use client";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { authKeys } from "../keys";
import { getMe, login as loginApi, logout as logoutApi } from "../api/authApi";
import type { LoginPayload } from "../types/auth.types";

export function useAuth() {
  const queryClient = useQueryClient();

  const meQuery = useQuery({
    queryKey: authKeys.all(),
    queryFn: getMe,
    retry: 0,
  });

  const loginMutation = useMutation({
    mutationFn: (payload: LoginPayload) => loginApi(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: authKeys.all() });
    },
  });

  const logoutMutation = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: authKeys.all() });
    },
  });

  return {
    user: meQuery.data ?? null,
    isLoading: meQuery.isLoading,
    isAuthenticated: Boolean(meQuery.data),
    login: loginMutation.mutateAsync,
    logout: logoutMutation.mutateAsync,
    isLoggingIn: loginMutation.isPending,
    isLoggingOut: logoutMutation.isPending,
  };
}
