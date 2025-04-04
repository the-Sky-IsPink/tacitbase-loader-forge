
import React from 'react';
import { cn } from "@/lib/utils";

type CircleDotsLoaderProps = {
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'error';
  className?: string;
};

const sizeMap = {
  sm: 'w-8 h-8',
  md: 'w-12 h-12',
  lg: 'w-16 h-16',
};

const colorMap = {
  primary: 'fill-primary',
  secondary: 'fill-secondary-DEFAULT',
  accent: 'fill-accent-DEFAULT',
  success: 'fill-success-DEFAULT',
  warning: 'fill-warning-DEFAULT',
  error: 'fill-error-DEFAULT',
};

const colorLightMap = {
  primary: 'fill-primary-200',
  secondary: 'fill-secondary-DEFAULT/20',
  accent: 'fill-accent-DEFAULT/20',
  success: 'fill-success-DEFAULT/20',
  warning: 'fill-warning-DEFAULT/20',
  error: 'fill-error-DEFAULT/20',
};

export function CircleDotsLoader({ 
  size = 'md', 
  color = 'primary',
  className 
}: CircleDotsLoaderProps) {
  const dots = Array.from({ length: 12 }, (_, i) => i);
  const radius = 18; // Distance from center of circle
  const dotSize = 2.5; // Size of each dot

  return (
    <div className={cn(
      "relative",
      sizeMap[size],
      className
    )}>
      <svg className="w-full h-full" viewBox="0 0 50 50">
        {dots.map((dot, index) => {
          const angle = (index / dots.length) * Math.PI * 2;
          const cx = 25 + radius * Math.cos(angle);
          const cy = 25 + radius * Math.sin(angle);
          const delay = `${(index / dots.length) * 1.2}s`;
          
          // Alternate between primary color and light color
          const dotColor = index <= dots.length / 3 
            ? colorMap[color]
            : index <= dots.length * 2 / 3 
              ? 'fill-primary-400' 
              : colorLightMap[color];
          
          return (
            <circle
              key={index}
              cx={cx}
              cy={cy}
              r={dotSize}
              className={cn(
                dotColor,
                "animate-circle-dots-fade"
              )}
              style={{ animationDelay: delay }}
            />
          );
        })}
      </svg>
    </div>
  );
}
