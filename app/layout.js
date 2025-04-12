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
  description: "Software development and cybersecurity portfolio by Aviv Nataf",
  viewport: "width=device-width, initial-scale=1.0, maximum-scale=1.0",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
      </head>
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
