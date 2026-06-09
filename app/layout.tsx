import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import { Header } from "@/app/components/header/header";
import "@/app/styles/globals.scss";

const lexend = Lexend({
  subsets: ["latin"],
  variable: "--font-lexend",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Turcanu Razvan — Portfolio",
  description: "Photography portfolio prototype",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={lexend.variable}>
      <body>
        <div className="page-container">
          <Header />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
