'use client';

import { BottomBar } from '@/ui/bottom-bar'; 
import { NavItem } from '@/ui/nav-item';
import { useActiveNav } from '@/hooks/use-active-nav';
import { NAV_ITEMS } from '@/config/navigation';

export const MobileNavbar = () => {
  const { activeItem, setActiveItem } = useActiveNav();

  return (
    <BottomBar>
      {NAV_ITEMS.map((item) => (
        <NavItem
          key={item.path}
          icon={<item.icon/>}
          isActive={activeItem === item.path}
          onClick={() => setActiveItem(item.path)}
        />
      ))}
    </BottomBar>
  );
};