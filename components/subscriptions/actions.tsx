'use server'

import { createClient } from '@/utils/supabase/server';
import { createOrRetrieveCustomer } from '@/utils/supabase/adminClient';
import { stripe } from '@/utils/stripe/config';
import { PRICE_LIST } from '@/utils/config';
import { redirect } from 'next/navigation';

export async function createCheckoutSession({option}:{option:number}): Promise<string | null> {
  const supabase = createClient();
  const { data: { user }, error } = await supabase.auth.getUser();

  if (!user) {
    console.log("User not logged in: ", error);
    redirect('/login');
  }

  try {
    const customer = await createOrRetrieveCustomer({
      uuid: user.id,
      email: user.email || ''
    });

    const session = await stripe.checkout.sessions.create({
      customer,
      line_items: [
        {
          price: PRICE_LIST[option],
          quantity: 1,
        },
      ],
      discounts: [{
        coupon: 'OG3mqiGe',
      }],
      mode: "subscription",
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/dashboard`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/pricing`,
    });

    return session.url;
  } catch (error) {
    console.error('Error creating checkout session:', error);
    return null;
  }
}