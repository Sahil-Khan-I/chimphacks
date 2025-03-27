import { Inter } from "next/font/google";
import "./globals.css";

const interFont = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Chimp Hacks",
  description: "Join us for exciting coding sessions and hackathons!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${interFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
