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
        icon: IoHome,
        hidden: false,
      },
      { 
        name: 'About', 
        path: '/about', 
        icon: FaUserAlt,
        hidden: false,
      },
      { 
        name: 'Services', 
        path: '/services', 
        icon: MdDesignServices,
        hidden: true,
      },
      { 
        name: 'Portfolio', 
        path: '/portfolio', 
        icon: FaWindowMaximize,
        hidden: false,
      },
      { 
        name: 'Blog', 
        path: '/blog', 
        icon: TbMailOpenedFilled,
        hidden: true,
      },
      { 
        name: 'Contact', 
        path: '/contact', 
        icon: BiSolidMessage,
        hidden: false,
      },

];