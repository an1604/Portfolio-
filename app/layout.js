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
  title: "Aviv Nataf | Software Developer",
  description: "Software development portfolio by Aviv Nataf",
};

export const viewport = {
  width: "device-width",
  initialScale: 1.0,
  maximumScale: 1.0,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden w-full dark:bg-darkTheme dark:text-white`}
        suppressHydrationWarning
      >
        {/* Wrap the application in ThemeProvider */}
        <ThemeProvider>
          <div className="max-w-full overflow-hidden">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
