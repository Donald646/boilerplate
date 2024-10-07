"use client"
import React, { createContext, useContext, useState, useEffect, useMemo, ReactNode } from 'react';
import { User } from '@supabase/supabase-js';
import { createClient } from '@/utils/supabase/client';
import { useQuery } from '@supabase-cache-helpers/postgrest-swr'

interface UserContextType {
  loading: boolean;
  userDetails: UserProfile | null;
  hasSubscription: boolean;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

interface UserContextProviderProps {
  children: ReactNode;
  userDetails: UserProfile | null;
}

const supabase = createClient();

export function UserContextProvider({ children, userDetails }: UserContextProviderProps) {
  const [loading, setLoading] = useState(!userDetails);
  const [hasSubscription, setHasSubscription] = useState(false);

  const { data: subscriptionData } = useQuery(
    userDetails ? supabase.from('subscriptions').select('status').eq('status', 'active').maybeSingle() : null
  );

  useEffect(() => {
    setHasSubscription(!!subscriptionData);
  }, [subscriptionData]);

  const value = useMemo(() => ({
    loading,
    userDetails,
    hasSubscription,
  }), []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export function useUser(): UserContextType {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('UseUser Context not Found');
  }
  return context;
}