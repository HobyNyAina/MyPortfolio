'use client';

import { DesktopSidebar } from './desktop-sidebar';
import { MobileNavbar } from './mobile-navbar';

export const Sidebar = () => (
  <>
    <MobileNavbar />
    <DesktopSidebar />
  </>
);