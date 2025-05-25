'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button'; 
import { cn } from '@/lib/utils';
export const NavItem = ({
  icon,
  isActive,
  onClick,
}: {
  icon: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
}) => (
  <motion.div whileHover={{ scale: 1.05 }}>
    <Button
      variant="ghost"
      size="icon"
      className={cn(
        'h-12 w-12 rounded-full',
        isActive 
          ? 'bg-emerald-500/20 text-emerald-400'
          : 'text-gray-400 hover:text-white'
      )}
      onClick={onClick}
    >
      {icon}
    </Button>
  </motion.div>
);