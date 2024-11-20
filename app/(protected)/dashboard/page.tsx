import React from 'react'
import { createClient } from '@/utils/supabase/server';
import { getSubscription } from '@/queries/getSubscription';
import getUser from '@/queries/user/getUser';
import Link from 'next/link';
import { Input } from '@/components/ui/input';

export default async function Page() {
    const supabase = await createClient();

    const [user, subscription] = await Promise.all([
        getUser(supabase),
        getSubscription(supabase)
      ]);

  return (
    <div> <Input className="" /></div>
  )
}
