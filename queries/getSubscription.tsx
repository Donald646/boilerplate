import { SupabaseClient } from '@supabase/supabase-js';
import { cache } from 'react';
export const getSubscription = cache(async (supabase: SupabaseClient) => {
    const { data: subscription, error } = await supabase
      .from('subscriptions')
      .select('*, prices(*, products(*))')
      .in('status', ['trialing', 'active'])
      .maybeSingle();
  
    return subscription;
  });