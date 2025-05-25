'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils';

export const ProfileImage = ({ 
  size = 'md'
}: {
  size?: 'sm' | 'md' | 'lg';
}) => {
  const sizes = {
    sm: 'w-12 h-12',
    md: 'w-14 h-14',
    lg: 'w-16 h-16'
  };

  return (
    <div className={cn(
      'rounded-full overflow-hidden border-2 border-white/20 hover:border-emerald-400',
      'transition-all duration-300',
      sizes[size]
    )}>
      <Image
        src="/images/profil.png"
        alt="Photo de profil"
        width={size === 'lg' ? 64 : size === 'md' ? 56 : 48}
        height={size === 'lg' ? 64 : size === 'md' ? 56 : 48}
        className="object-cover w-full h-full hover:scale-105 transition-transform"
      />
    </div>
  );
};