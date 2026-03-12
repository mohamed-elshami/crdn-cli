"use client";

import { QueryClientProvider } from "@tanstack/react-query";
import { getQueryClient } from "./queryClient";

export function ReactQueryProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const client = getQueryClient();

  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
}

