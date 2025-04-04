
import React from 'react';
import { cn } from "@/lib/utils";

type GridDotsLoaderProps = {
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
  primary: 'bg-primary',
  secondary: 'bg-secondary-DEFAULT',
  accent: 'bg-accent-DEFAULT',
  success: 'bg-success-DEFAULT',
  warning: 'bg-warning-DEFAULT',
  error: 'bg-error-DEFAULT',
};

const colorLightMap = {
  primary: 'bg-primary-200',
  secondary: 'bg-secondary-DEFAULT/20',
  accent: 'bg-accent-DEFAULT/20',
  success: 'bg-success-DEFAULT/20',
  warning: 'bg-warning-DEFAULT/20',
  error: 'bg-error-DEFAULT/20',
};

export function GridDotsLoader({ 
  size = 'md', 
  color = 'primary',
  className 
}: GridDotsLoaderProps) {
  // Create a 2x2 grid of dots
  const dotSizeClasses = {
    sm: 'w-2 h-2',
    md: 'w-3 h-3',
    lg: 'w-4 h-4',
  };

  const gapClasses = {
    sm: 'gap-1',
    md: 'gap-2',
    lg: 'gap-3',
  };

  return (
    <div className={cn(
      "grid grid-cols-2 grid-rows-2",
      gapClasses[size],
      className
    )}>
      {/* Top left dot */}
      <div className={cn(
        "rounded-full animate-pulse-staggered-1",
        dotSizeClasses[size],
        colorMap[color]
      )}></div>
      
      {/* Top right dot */}
      <div className={cn(
        "rounded-full animate-pulse-staggered-2",
        dotSizeClasses[size],
        colorLightMap[color]
      )}></div>
      
      {/* Bottom left dot */}
      <div className={cn(
        "rounded-full animate-pulse-staggered-4",
        dotSizeClasses[size],
        colorLightMap[color]
      )}></div>
      
      {/* Bottom right dot */}
      <div className={cn(
        "rounded-full animate-pulse-staggered-3",
        dotSizeClasses[size],
        colorMap[color]
      )}></div>
    </div>
  );
}
