import MainLayout from "@/components/nav/mainlayout";
import getUser from "@/queries/user/getUser";
import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { NAME } from "@/utils/config";
import { headers } from 'next/headers'
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
  if (!user) {
    redirect(`/login`);
  }

  return (
    <MainLayout user={user}>
      {children}
    </MainLayout>
  );
}