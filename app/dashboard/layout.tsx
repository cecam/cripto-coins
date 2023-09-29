import "@/styles/globals.css";
import { Metadata } from "next";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";
import clsx from "clsx";

export const metadata: Metadata = {
  title: "nextui-coins",
  description: "A simple cryptocurrency tracker built with Next.js and NextUI.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-screen relative flex flex-col h-screen">
      <Navbar />
      <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
        {children}
      </main>
    </div>
  );
}
