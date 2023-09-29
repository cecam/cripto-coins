import "@/styles/globals.css";
import { Metadata } from "next";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import clsx from "clsx";

export const metadata: Metadata = {
  title: "auth nextui-coins",
  description: "A simple cryptocurrency tracker built with Next.js and NextUI.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={clsx(
          "min-h-screen font-sans antialiased",
          fontSans.variable
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          <div className="relative flex flex-col h-screen">
            <main className="w-full h-full grid place-content-center">
              {children}
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
