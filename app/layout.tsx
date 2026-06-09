import type { Metadata } from "next";
import { Header } from "@/app/components/header/header";
import "@/app/styles/globals.scss";

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
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <div className="page-container">
          <Header />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
