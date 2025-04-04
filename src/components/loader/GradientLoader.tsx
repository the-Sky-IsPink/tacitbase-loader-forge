
import React from 'react';
import { cn } from "@/lib/utils";

type GradientLoaderProps = {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'bar' | 'circle';
  className?: string;
};

const sizeMap = {
  sm: {
    bar: 'h-1.5 w-24',
    circle: 'w-6 h-6',
  },
  md: {
    bar: 'h-2 w-36',
    circle: 'w-10 h-10',
  },
  lg: {
    bar: 'h-3 w-48',
    circle: 'w-16 h-16',
  },
};

export function GradientLoader({ 
  size = 'md', 
  variant = 'bar',
  className 
}: GradientLoaderProps) {
  return (
    <div className={cn(
      "relative overflow-hidden rounded-full",
      sizeMap[size][variant],
      variant === 'circle' ? 'flex items-center justify-center' : '',
      className
    )}>
      <div className={cn(
        "absolute inset-0 bg-gradient-to-r from-primary-300 via-primary to-primary-600 animate-gradient-move bg-[length:200%_100%]",
      )}>
        {variant === 'circle' && (
          <div className="absolute inset-1 rounded-full bg-background"></div>
        )}
      </div>
      
      {variant === 'circle' && (
        <div className="z-10 text-primary text-xs font-medium">
          <span className="font-display">T</span>
        </div>
      )}
    </div>
  );
}
