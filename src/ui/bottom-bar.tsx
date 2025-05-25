'use client';
import { cn } from '@/lib/utils';

export const BottomBar = ({ 
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={cn(
    'md:hidden fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-gray-800',
    'flex justify-around py-3 px-4',
    className
  )}>
    {children}
  </div>
);