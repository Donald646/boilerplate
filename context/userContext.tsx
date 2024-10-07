"use client"
import React, { createContext, useContext, useState, useEffect, useMemo, ReactNode } from 'react';
import { User } from '@supabase/supabase-js';
import { createClient } from '@/utils/supabase/client';
import { useQuery } from '@supabase-cache-helpers/postgrest-swr'

interface UserContextType {
  loading: boolean;
  user: User | null;
  hasSubscription: boolean;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

interface UserContextProviderProps {
  children: ReactNode;
  user: User | null;
}

const supabase = createClient();

export function UserContextProvider({ children, user }: UserContextProviderProps) {
  const [loading, setLoading] = useState(!user);
  const [hasSubscription, setHasSubscription] = useState(false);

  const { data: subscriptionData } = useQuery(
    user ? supabase.from('subscriptions').select('status').eq('status', 'active').maybeSingle() : null
  );

  useEffect(() => {
    setHasSubscription(!!subscriptionData);
  }, [subscriptionData]);

  const value = useMemo(() => ({
    loading,
    user,
    hasSubscription,
  }), [loading, user, hasSubscription]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export function useUser(): UserContextType {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('UseUser Context not Found');
  }
  return context;
}