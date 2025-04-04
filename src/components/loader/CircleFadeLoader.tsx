
import React from 'react';
import { cn } from "@/lib/utils";

type CircleFadeLoaderProps = {
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

const bgColorMap = {
  primary: 'stroke-primary-200',
  secondary: 'stroke-secondary-DEFAULT/20',
  accent: 'stroke-accent-DEFAULT/20',
  success: 'stroke-success-DEFAULT/20',
  warning: 'stroke-warning-DEFAULT/20',
  error: 'stroke-error-DEFAULT/20',
};

export function CircleFadeLoader({ 
  size = 'md', 
  color = 'primary',
  className 
}: CircleFadeLoaderProps) {
  return (
    <div className={cn(
      "relative",
      sizeMap[size],
      className
    )}>
      <svg className="w-full h-full" viewBox="0 0 42 42">
        {/* Background circle */}
        <circle 
          className={bgColorMap[color]}
          cx="21" 
          cy="21" 
          r="16" 
          fill="none" 
          strokeWidth="4"
        />
        
        {/* Foreground circle with animated stroke-dasharray */}
        <circle 
          className={cn(
            colorMap[color],
            "animate-circle-fade"
          )}
          cx="21" 
          cy="21" 
          r="16" 
          fill="none" 
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray="25 75"
          transform="rotate(-90 21 21)"
        />
      </svg>
    </div>
  );
}
