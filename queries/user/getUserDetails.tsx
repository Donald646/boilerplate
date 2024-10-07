import { SupabaseClient } from '@supabase/supabase-js';
import { cache } from 'react';
export const getUserDetails = cache(async (uuid: string | undefined, supabase:SupabaseClient) => {
    const { data: userDetails } = await supabase
      .from('users')
      .select('*')
      .single();
    return userDetails;
  });