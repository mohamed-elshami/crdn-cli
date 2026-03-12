"use client";

import { ReactNode } from "react";
import { ReactQueryProvider } from "@/lib/react-query/provider";

export function Providers({ children }: { children: ReactNode }) {
  return <ReactQueryProvider>{children}</ReactQueryProvider>;
}
