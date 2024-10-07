import React from 'react'
import { createClient } from '@/utils/supabase/server';
import { getSubscription } from '@/queries/getSubscription';
import getUser from '@/queries/user/getUser';

export default async function Page() {
    const supabase = createClient();

    const [user, subscription] = await Promise.all([
        getUser(supabase),
        getSubscription(supabase)
      ]);

  return (
    <div>Page</div>
  )
}
