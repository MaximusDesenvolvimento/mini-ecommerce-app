import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Toaster } from "@/components/ui/toaster";
import { AppProvider } from "@/hooks";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "mini ecommerce",
  description: "vendas de produtos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <main>
          <AppProvider>
            <Header />
            {children}
            <Toaster />
          </AppProvider>
        </main>
      </body>
    </html>
  );
}
