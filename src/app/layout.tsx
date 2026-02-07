import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sunny Pints",
  description: "Find sunny beer gardens (and heaters) on a map.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="app-shell">{children}</div>
      </body>
    </html>
  );
}
