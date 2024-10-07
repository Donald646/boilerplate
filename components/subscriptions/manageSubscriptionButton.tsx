import Link from "next/link";
import { Button } from "../ui/button";
import { User } from "@supabase/supabase-js";
import { createAdminClient } from "@/utils/supabase/adminClient";

export default async function ManageSubscriptionButton({user}: {user:User | null}) {
   if (!user) return null;

   const supabase = createAdminClient()
   const { data, error } = await supabase
      .from("subscriptions")
      .select("id")
      .eq("user_id", user.id)
      .single()

   if (error && error.code !== 'PGRST116') {
      console.error("Error checking subscription:", error)
      return null
   }

   const hasSubscription = !!data
   return (
      hasSubscription ? (
         <Link href="/manage-subscription">
            <Button elevated>Manage Subscription</Button>
         </Link>
      ) : null
   )
}