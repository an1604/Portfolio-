import { Outfit, Ovo } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./context/ThemeContext";

const outfit = Outfit({
  subsets: ["latin"], 
  weight: ['400','500','600','700']
});

const ovo = Ovo({
  subsets: ["latin"], 
  weight: ['400']
});

export const metadata = {
  title: "Portfolio - Aviv Nataf",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden dark:bg-darkTheme dark:text-white`}
        suppressHydrationWarning
      >
        {/* Wrap the application in ThemeProvider */}
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
