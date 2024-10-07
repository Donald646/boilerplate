import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Analytics } from '@vercel/analytics/react';
import { CSPostHogProvider } from './providers'
import { ThemeProvider } from "@/components/public/themeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "draftlyai",
  description: "A powerful, comprehensive AI study library",
  keywords: [
  ],
  openGraph: {
    title: {
      default: "draftlyai",
      template: `%s | draftlyai`,
    },
    description:
      "An AI study tool box. A library of comprehensive AI study tools",
    url: "https://www.draftlyai.com",
    siteName: "draftlyai.com",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Draftly',
    description: 'A powerful, comprehensive AI study library',
    creator: '@draftly',
    images: [""]
  },
  metadataBase: new URL("https://www.draftlyai.com"),
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