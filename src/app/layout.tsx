import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

// Components
import Header from "./_components/Header";

// Font
const jetbrains = JetBrains_Mono({ 
  subsets: ["latin"], 
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono" 
});

// Metadata
export const metadata: Metadata = {
  title: "Pokédex | A Pokémon Index",
  description: "A Pokémon Database for useful information about Pokémon.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jetbrains.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
