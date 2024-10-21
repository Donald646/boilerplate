import React from 'react';
import { Button } from '../ui/button';
import Link from 'next/link';
import { RocketIcon, InfoIcon, DollarSignIcon, FlagIcon, LogInIcon, UserPlusIcon, GraduationCapIcon } from 'lucide-react';
import getUser from '@/queries/user/getUser';
import Logo from './logo';
import { MobileSidebar } from './mobileSidebar';

const PUBLIC_SIDEBAR_ITEMS = [
  {
    title: "About",
    href: "/",
    icon: <InfoIcon />,
  },
  {
    title: "Pricing",
    href: "/pricing",
    icon: <DollarSignIcon />,
  },
{
    title: "Mission",
    href: "/mission",
    icon: <FlagIcon />,
  },
  {
    title: "Login",
    href: "/login",
    icon: <LogInIcon />,
  },
];

export default async function PublicNavbar() {
  const user = await getUser() 
  return (
    <div className='flex justify-between items-center w-full sticky top-0 backdrop-blur-md p-2 md:px-[2vw] z-50'>
      <div className='hidden md:flex flex-row gap-2 items-center'>
     <Logo/>
      </div>
      <div className='hidden md:flex flex-row items-center gap-5 text-md'>
        <Link className='text-muted-foreground transition-colors hover:text-foreground' href="/pricing">Pricing</Link>
        <Link className='text-muted-foreground transition-colors hover:text-foreground' href="/mission">Mission</Link>
      </div>
      <div className='md:hidden'>
        <MobileSidebar sidebarItems={PUBLIC_SIDEBAR_ITEMS} />
      </div>
      <div className='flex items-center gap-2'>
        {user ? (
          <Link href="/dashboard">
            <Button className="" variant={"default"}>Dashboard</Button>
          </Link>
        ) : (
          <>
            <Link href="/login">
              <Button className=''>Login</Button>
            </Link>
          </>
        )}    
      </div>
    </div>
  );
}