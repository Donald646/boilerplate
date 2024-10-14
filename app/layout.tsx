import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Analytics } from '@vercel/analytics/react';
import { CSPostHogProvider } from './providers'
import { ThemeProvider } from "@/components/public/themeProvider";
import { NAME } from "@/utils/config";

const inter = Inter({ subsets: ["latin"] });
const description = 'put description here'
const siteName = "boilerplate.com"
export const metadata: Metadata = {
  title: `${NAME}`,
  description: description,
  keywords: [
  ],
  openGraph: {
    title: {
      default: `${NAME}`,
      template: `%s | ${NAME}`,
    },
    description: description,
    url: `https://www.${siteName}`,
    siteName: siteName,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: 'summary_large_image',
    title: `${NAME}`,
    description: description,
    creator: '@donaldvchu',
    images: [""]
  },
  metadataBase: new URL(`https://www.${siteName}`),
  icons: {
    icon: "/favicon.ico", // Path to your favicon
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <CSPostHogProvider>
      <body className={inter.className}>
        <ThemeProvider>
        <TooltipProvider>
          {children}
          <Analytics/>
          <Toaster />
          </TooltipProvider>
        </ThemeProvider>
        </body>
      </CSPostHogProvider>
      
    </html>
  );
}