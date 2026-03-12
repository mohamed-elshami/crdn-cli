/**
 * Root query keys for the whole app
 */
export const queryKeys = {
  root: ["app"] as const,
};

export function createQueryKeys<TPrefix extends string>(prefix: TPrefix) {
  const root = [prefix] as const;

  return {
    root,

    all: () => [...root] as const,

    lists: () => [...root, "list"] as const,

    list: (params?: Record<string, unknown>) =>
      [...root, "list", params] as const,

    detail: (id: string | number) => [...root, "detail", id] as const,
  };
}
