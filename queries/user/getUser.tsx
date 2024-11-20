import { createClient } from "@/utils/supabase/server"
import { SupabaseClient } from "@supabase/supabase-js"
export default async function getUser(supabase?: SupabaseClient) {
const client  =  supabase ? supabase:  await createClient()
const { data: { user } } = await client.auth.getUser()
 return user
}
