// components/sidebar/desktop-sidebar.tsx
'use client';

import { Sheet, SheetContent } from '@/ui/sheet';
import { NavItem } from '@/ui/nav-item';
import { ProfileImage } from '@/ui/profile-image';
import { useActiveNav }  from '@/hooks/use-active-nav';
import { NAV_ITEMS } from '@/config/navigation';

import React from 'react';

export const DesktopSidebar = () => {
  const { activeItem, setActiveItem } = useActiveNav();
  const [isOpen, setIsOpen] = React.useState(true);

  return (
    <Sheet isOpen={isOpen} onClose={() => setIsOpen(false)}>
      <SheetContent side="left" className="w-20 p-0 border-r border-gray-800">
        <div className="flex flex-col h-full items-center py-8 space-y-10">
          <ProfileImage size="lg" />
          
          <nav className="flex-1 flex flex-col items-center space-y-6">
            {NAV_ITEMS.map((item) => (
              <NavItem
                key={item.path}
                icon={<item.icon/>}
                isActive={activeItem === item.path}
                onClick={() => setActiveItem(item.path)}
              />
            ))}
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  );
};