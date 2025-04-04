
import React from 'react';
import { cn } from "@/lib/utils";

type RippleLoaderProps = {
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
  primary: 'border-primary',
  secondary: 'border-secondary-DEFAULT',
  accent: 'border-accent-DEFAULT',
  success: 'border-success-DEFAULT',
  warning: 'border-warning-DEFAULT',
  error: 'border-error-DEFAULT',
};

const innerColorMap = {
  primary: 'bg-primary',
  secondary: 'bg-secondary-DEFAULT',
  accent: 'bg-accent-DEFAULT',
  success: 'bg-success-DEFAULT',
  warning: 'bg-warning-DEFAULT',
  error: 'bg-error-DEFAULT',
};

export function RippleLoader({ 
  size = 'md', 
  color = 'primary',
  className 
}: RippleLoaderProps) {
  return (
    <div className={cn(
      "relative flex items-center justify-center",
      sizeMap[size],
      className
    )}>
      {/* Outer ripples */}
      <div className={cn(
        "absolute inset-0 rounded-full opacity-0 border-4 animate-[ripple_2s_cubic-bezier(0,0.2,0.8,1)_infinite]",
        colorMap[color],
      )}></div>
      <div className={cn(
        "absolute inset-0 rounded-full opacity-0 border-4 animate-[ripple_2s_cubic-bezier(0,0.2,0.8,1)_infinite_-0.5s]",
        colorMap[color],
      )}></div>
      
      {/* Center dot */}
      <div className={cn(
        "absolute w-1/4 h-1/4 rounded-full",
        innerColorMap[color]
      )}>
        <div className="absolute inset-0 rounded-full animate-pulse opacity-80"></div>
      </div>
    </div>
  );
}
