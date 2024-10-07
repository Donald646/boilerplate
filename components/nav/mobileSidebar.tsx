"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { Menu, X, RocketIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { cn } from "@/lib/utils";
import Logo from "./logo";

interface SidebarItem {
  title: string;
  href: string;
  icon: React.ReactNode;
}

interface MobileSidebarProps {
  sidebarItems: SidebarItem[];
}

export const MobileSidebar: React.FC<MobileSidebarProps> = ({ sidebarItems }) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const sideBar = (
    <div className="">
      <div
        className={`fixed z-40 top-0 left-0 h-screen w-2/3 p-4 text-foreground bg-background shadow-lg transition-transform duration-300 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="w-full flex justify-between items-center mb-4">
          <Logo onClick={toggleDrawer}/>
          <Button variant="ghost" size="icon" onClick={toggleDrawer}>
            <X/>
          </Button>
        </div>
        <div className="flex flex-col gap-4">
          {sidebarItems.slice(1).map((item) => (
            <Link 
              key={item.href}
              href={item.href} 
              className={cn(
                "flex items-center gap-2 p-2 rounded-lg text-muted-foreground transition-colors hover:text-foreground hover:bg-muted",
                pathname === item.href && "bg-muted text-foreground"
              )}
              onClick={toggleDrawer}
            >
              {item.icon}
              <span>{item.title}</span>
            </Link>
          ))}
        </div>
      </div>
      <div
        className={`fixed z-30 top-0 left-0 w-full h-screen bg-black opacity-50 ${
          isOpen ? "block" : "hidden"
        }`}
        onClick={toggleDrawer}
      />
    </div>
  )

  return (
    <div className="md:hidden">
      <Button variant="ghost" onClick={toggleDrawer} size="icon">
        <Menu className="size-8"/>
      </Button>
      {sideBar}
    </div>
  )
}