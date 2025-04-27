import { IconType } from 'react-icons/lib';

export type NavItem = {
  name: string;
  path: string;
  icon: IconType;
  subItems?: NavItem[];
};

export type NavigationConfig = NavItem[];