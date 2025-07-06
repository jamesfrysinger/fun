// app/layout.tsx
import "./globals.css";
import { Inter } from "next/font/google";
import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "DevShowcase",
  description: "Your dev portfolio CMS",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body className="min-h-screen bg-slate-50 text-slate-900">
        <header className="flex items-center justify-between p-4 border-b border-slate-200">
          <h1 className="text-2xl font-bold">DevShowcase</h1>
          <Link href="/projects">
            <Button variant="ghost">Projects</Button>
          </Link>
          <Link href="/blog">
            <Button variant="ghost">Blog</Button>
          </Link>
          <Link href="/contact">
            <Button variant="ghost">Contact</Button>
          </Link>
          <nav>
            <Button variant="outline">Login</Button>
          </nav>
        </header>
        <main className="p-8">{children}</main>
        <footer className="border-t border-slate-200 p-4 text-center text-sm text-slate-600">
          © {new Date().getFullYear()} DevShowcase
        </footer>
      </body>
    </html>
  );
}
