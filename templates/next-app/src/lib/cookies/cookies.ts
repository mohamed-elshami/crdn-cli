import {
  getCookie as getClientCookie,
  setCookie as setClientCookie,
  deleteCookie as deleteClientCookie,
} from "cookies-next/client";
import {
  setCookie as setServerCookie,
  deleteCookie as deleteServerCookie,
} from "cookies-next/server";

import { getCookies as getServerCookie } from "next-client-cookies/server";

export function getCookie(
  key: string
): string | undefined | Promise<string | undefined> {
  try {
    if (typeof window === "undefined") {
      return (async () => {
        return (await getServerCookie()).get(key);
      })();
    } else {
      return getClientCookie(key);
    }
  } catch (error) {
    console.error(`Error getting cookie: ${key}`, error);
    return undefined;
  }
}

export async function setCookie(
  key: string,
  value: string,
  options?: {
    maxAge?: number;
    path?: string;
    domain?: string;
    secure?: boolean;
    sameSite?: "strict" | "lax" | "none";
    httpOnly?: boolean;
  }
) {
  if (typeof window === "undefined") {
    setServerCookie(key, value, options);
  } else {
    setClientCookie(key, value, options);
  }
}

export async function deleteCookie(
  key: string,
  options?: {
    path?: string;
    domain?: string;
  }
): Promise<void> {
  try {
    if (typeof window === "undefined") {
      deleteServerCookie(key, options);
    } else {
      deleteClientCookie(key, options);
    }
  } catch (error) {
    console.error(`Error deleting cookie: ${key}`, error);
  }
}
