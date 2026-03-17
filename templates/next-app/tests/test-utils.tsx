import React, { ReactElement, PropsWithChildren } from "react";
import { render, RenderOptions } from "@testing-library/react";
import { Providers } from "@/providers/Providers";

function AllProviders({ children }: PropsWithChildren) {
  return <Providers>{children}</Providers>;
}

export function renderWithProviders(
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">,
) {
  return render(ui, { wrapper: AllProviders, ...options });
}

