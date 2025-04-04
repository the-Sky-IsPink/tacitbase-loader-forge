
import React from 'react';
import { cn } from "@/lib/utils";

type PulseLoaderProps = {
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'error';
  className?: string;
};

const sizeMap = {
  sm: 'w-6 h-6',
  md: 'w-10 h-10',
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

export function PulseLoader({ 
  size = 'md', 
  color = 'primary',
  className 
}: PulseLoaderProps) {
  return (
    <div className="flex items-center justify-center">
      <div className={cn(
        "relative flex items-center justify-center",
        sizeMap[size],
        className
      )}>
        <div className={cn(
          "absolute inset-0 rounded-full animate-pulse-ring opacity-75",
          colorMap[color]
        )}></div>
        <div className={cn(
          "absolute inset-[15%] rounded-full",
          colorMap[color]
        )}></div>
      </div>
    </div>
  );
}
