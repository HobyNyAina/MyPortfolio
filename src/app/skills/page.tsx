import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

interface SkillCircleProps {
  skill: string;
  level: number;
}

function SkillCircle({ skill, level }: SkillCircleProps) {
  const radius = 57;
  const stroke = 7;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (level / 100) * circumference;

  const controls = useAnimation();

  useEffect(() => {
    controls.start({ strokeDashoffset });
  }, [strokeDashoffset], controls);

  return (
    <div className="flex flex-col items-center">
      <div className="relative">
      <svg height={radius * 2} width={radius * 2} className="mb-2 rotate-[-90deg]">
        <circle
          stroke="#1e293b"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <motion.circle
          stroke="#00BDC8"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          strokeDasharray={circumference}
          strokeLinecap="round"
          animate={controls}
          initial={{ strokeDashoffset: circumference }}
          transition={{ duration: 1.2 }}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white font-bold text-2xl">{level}%</span>
        </div>
    </div>
      <span className="text-sm text-gray-300 mt-1">{skill}</span>
    </div>
  );
}

export default function SkillsPage() {
  return (
    <div>
      <SkillCircle skill="JavaScript" level={90} />
      <SkillCircle skill="React" level={85} />
    </div>
  );
}
