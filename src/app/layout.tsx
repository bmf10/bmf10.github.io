import "./globals.css";
import type { Metadata } from "next";
import { Inter, Orbitron } from "next/font/google";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bima Febriansyah's Page",
  description:
    "A Full stack Developer who has a strong passion for programming. Easy to learn, solve problems, and love to learn new things.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <div id="modal-portal"></div>
        <Toaster />
      </body>
    </html>
  );
}
