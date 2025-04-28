'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react'; 
import { ReactNode } from 'react';

export function Sheet({
  isOpen,
  onClose,
  side = 'left',
  children,
}: {
  isOpen: boolean;
  onClose: () => void;
  side?: 'left' | 'right';
  children: ReactNode;
}) {
  const variants = {
    left: { x: '-100%' },
    right: { x: '100%' },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-40"
          />

          {/* Sheet Content */}
          <motion.div
            initial={{ x: variants[side].x }}
            animate={{ x: 0 }}
            exit={{ x: variants[side].x }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className={`
              fixed top-0 ${side}-0 bottom-0 
              w-72 max-w-full bg-gray-900 
              border-r border-gray-700 
              z-50 shadow-xl
            `}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-1 rounded-full hover:bg-gray-800"
            >
              <X className="w-5 h-5 text-gray-400" />
            </button>
            {children}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

interface SheetContentProps {
  children: ReactNode;
  side?: 'left' | 'right';
  className?: string;
}

export function SheetContent({
    children,
    side = 'left',
    className = '',
  }: SheetContentProps) {
    return (
      <div className={`fixed top-0 bottom-0 z-50 bg-gray-900 border-r border-gray-800 ${
        side === 'left' ? 'left-0' : 'right-0'
      } ${className}`}>
        {children}
      </div>
    );

  }