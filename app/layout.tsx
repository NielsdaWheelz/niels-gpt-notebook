import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "llm notebook",
  description: "questions, experiments, and working notes on building a language model from scratch.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
