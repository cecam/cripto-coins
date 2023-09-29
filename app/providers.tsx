"use client";

import * as React from "react";
import { NextUIProvider } from "@nextui-org/system";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";

import AuthProvider from "@/context/AuthContext";
import FavouriteCoinProvider from "@/context/FavouriteCoinContext";

export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

export function Providers({ children, themeProps }: ProvidersProps) {
  return (
    <NextUIProvider>
      <AuthProvider>
        <FavouriteCoinProvider>
          <NextThemesProvider {...themeProps}>{children}</NextThemesProvider>
        </FavouriteCoinProvider>
      </AuthProvider>
    </NextUIProvider>
  );
}
