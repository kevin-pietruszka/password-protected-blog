import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Session } from "@/components/session";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Isabelle's Blog",
  description: "Blog about Isabelle's adventures during law school",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Session>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </Session>
      </body>
    </html>
  );
}
