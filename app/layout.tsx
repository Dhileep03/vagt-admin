import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SessionProvider } from "next-auth/react";
import { cn } from "@/lib/utils";
import Provider from "@/query-client/provider";
import { Toaster } from "@/components/ui/sonner";
import { auth } from "@/auth";

import "./globals.css";

const fontHeading = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
});

const fontBody = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "VAGT",
  description: "",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  return (
    <SessionProvider session={session}>
      <html lang="en">
        <Provider>
          <body
            className={cn(
              "antialiased",
              fontHeading.variable,
              fontBody.variable
            )}
          >
            {children}
          </body>
        </Provider>
        <Toaster position="top-right" toastOptions={{ style: { background: 'black', color: 'white' } }}/>
      </html>
    </SessionProvider>
  );
}
