import MainLayout from "@/components/nav/mainlayout";
import { UserContextProvider } from "@/context/userContext";
import getUser from "@/queries/user/getUser";
import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { NAME } from "@/utils/config";


export const metadata: Metadata = {
  title: `Home | ${NAME}`,
  description: "description",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await getUser()

  if (!user) {
    redirect("/login")
  }

  return (
 <UserContextProvider user={user}>
      <MainLayout>
        {children}
      </MainLayout>
    </UserContextProvider>

   
  );
}