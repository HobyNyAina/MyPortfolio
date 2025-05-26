// src/app/skills/page.tsx
'use client';

import SkillCircle from '@/components/SkillCircle';

export default function Skills() {
  return (
    <div className="grid grid-cols-2 gap-8">
      <SkillCircle label="React" percent={85} />
      <SkillCircle label="Next.js" percent={80} />
      <SkillCircle label="TypeScript" percent={75} />
      <SkillCircle label="Tailwind CSS" percent={70} />
    </div>
  );
}
