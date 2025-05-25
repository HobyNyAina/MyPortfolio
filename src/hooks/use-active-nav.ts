'use client';

import { useState } from 'react';

export const useActiveNav = (initialPath = '/') => {
  const [activeItem, setActiveItem] = useState(initialPath);
  return { activeItem, setActiveItem };
};