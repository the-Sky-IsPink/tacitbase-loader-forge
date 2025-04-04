
import React from 'react';
import { cn } from "@/lib/utils";

type SunburstLoaderProps = {
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
  primary: 'stroke-primary',
  secondary: 'stroke-secondary-DEFAULT',
  accent: 'stroke-accent-DEFAULT',
  success: 'stroke-success-DEFAULT',
  warning: 'stroke-warning-DEFAULT',
  error: 'stroke-error-DEFAULT',
};

const colorLightMap = {
  primary: 'stroke-primary-200',
  secondary: 'stroke-secondary-DEFAULT/20',
  accent: 'stroke-accent-DEFAULT/20',
  success: 'stroke-success-DEFAULT/20',
  warning: 'stroke-warning-DEFAULT/20',
  error: 'stroke-error-DEFAULT/20',
};

export function SunburstLoader({ 
  size = 'md', 
  color = 'primary',
  className 
}: SunburstLoaderProps) {
  const rays = Array.from({ length: 12 }, (_, i) => i);
  const rotation = 360 / rays.length;

  return (
    <div className={cn(
      "relative",
      sizeMap[size],
      className
    )}>
      <svg className="w-full h-full animate-spin-slow" viewBox="0 0 50 50">
        {rays.map((ray, index) => {
          // Alternate colors and use different opacities for visual effect
          const isEven = index % 2 === 0;
          const rayColor = isEven ? colorMap[color] : colorLightMap[color];
          const delay = `${(index / rays.length) * 1}s`;
          
          return (
            <line
              key={index}
              x1="25"
              y1="9" // Inner radius
              x2="25"
              y2="3" // Outer radius
              className={cn(
                rayColor,
                "animate-sunburst-pulse"
              )}
              style={{ 
                transformOrigin: 'center',
                transform: `rotate(${index * rotation}deg)`,
                animationDelay: delay,
                strokeWidth: isEven ? 3 : 2,
              }}
              strokeLinecap="round"
            />
          );
        })}
      </svg>
    </div>
  );
}
