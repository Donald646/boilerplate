import PublicNavbar from "@/components/nav/publicNavbar";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
        <>
        <PublicNavbar/>
        {children}
        </>
        
  );
}