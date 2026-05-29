import type { Metadata } from "next";
import { JetBrains_Mono, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/utils/SmoothScroll";
import { StyledComponentsRegistry } from "@/utils/StyledComponentRegistry";

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-bricolage-grotesque",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio using Nextjs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bricolageGrotesque.variable} ${jetBrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col" cz-shortcut-listen="true">
        <StyledComponentsRegistry>
          <SmoothScroll>{children}</SmoothScroll>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
