import MainLayout from "@/components/nav/mainlayout";
import { UserContextProvider } from "@/context/userContext";
import getUser from "@/queries/user/getUser";
import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { NAME } from "@/utils/config";
import { getUserDetails } from "@/queries/user/getUserDetails";
import { createClient } from "@/utils/supabase/server";


export const metadata: Metadata = {
  title: `Home | ${NAME}`,
  description: "description",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const supabase = createClient()
  const user = await getUser(supabase)
  const userDetails = await getUserDetails(user?.id, supabase)
  console.log(userDetails)
  if (!user) {
    redirect("/login")
  }

  return (
 <UserContextProvider userDetails={userDetails}>
      <MainLayout>
        {children}
      </MainLayout>
    </UserContextProvider>

   
  );
}