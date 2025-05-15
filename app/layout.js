import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const fontSans = GeistSans;
const fontMono = GeistMono;

export const metadata = {
  title: "Chimp Hacks",
  description: "Join us for exciting coding sessions and hackathons!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${fontSans.variable} ${fontMono.variable} min-h-screen font-sans antialiased`}
      >
        {/* Hack Club Banner */}
        <a href="https://hackclub.com/" className="hack-club-banner block">
          <img 
            style={{ 
              position: "absolute", 
              top: 0, 
              left: 10, 
              border: 0, 
              width: 256, 
              zIndex: 999 
            }} 
            src="https://assets.hackclub.com/banners/2025.svg" 
            alt="Hack Club"
          />
        </a>
        
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
