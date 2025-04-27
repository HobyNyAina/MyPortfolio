import { NavigationConfig } from '@/types/navigation';
import { IoHome } from 'react-icons/io5'
import { FaUserAlt } from 'react-icons/fa'
import { MdDesignServices } from 'react-icons/md'
import { FaWindowMaximize } from 'react-icons/fa'
import { BiSolidMessage } from 'react-icons/bi'
import { TbMailOpenedFilled } from 'react-icons/tb'

export const NAV_ITEMS: NavigationConfig = [

      { 
        name: 'Home', 
        path: '/', 
        icon: IoHome
      },
      { 
        name: 'About', 
        path: '/about', 
        icon: FaUserAlt
      },
      { 
        name: 'Services', 
        path: '/services', 
        icon: MdDesignServices
      },
      { 
        name: 'Portfolio', 
        path: '/portfolio', 
        icon: FaWindowMaximize 
      },
      { 
        name: 'Blog', 
        path: '/blog', 
        icon: BiSolidMessage 
      },
      { 
        name: 'Contact', 
        path: '/contact', 
        icon: TbMailOpenedFilled 
      },

];