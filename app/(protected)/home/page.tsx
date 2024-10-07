import React from 'react'
import { createClient } from '@/utils/supabase/server';
import { getSubscription } from '@/queries/getSubscription';
import getUser from '@/queries/user/getUser';
import { getUserDetails } from '@/queries/user/getUserDetails';

export default async function Page() {
    const supabase = createClient();

    const [user, userDetails, subscription] = await Promise.all([
        getUser(supabase),
        getUserDetails(supabase),
        getSubscription(supabase)
      ]);

  return (
    <div>Page</div>
  )
}
