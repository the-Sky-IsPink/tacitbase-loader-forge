
import React from 'react';
import { cn } from "@/lib/utils";

type DotsLoaderProps = {
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'error';
  className?: string;
};

const sizeMap = {
  sm: 'space-x-1',
  md: 'space-x-2',
  lg: 'space-x-3',
};

const dotSizeMap = {
  sm: 'w-1.5 h-1.5',
  md: 'w-2.5 h-2.5',
  lg: 'w-4 h-4',
};

const colorMap = {
  primary: 'bg-primary',
  secondary: 'bg-secondary-DEFAULT',
  accent: 'bg-accent-DEFAULT',
  success: 'bg-success-DEFAULT',
  warning: 'bg-warning-DEFAULT',
  error: 'bg-error-DEFAULT',
};

export function DotsLoader({ 
  size = 'md', 
  color = 'primary',
  className 
}: DotsLoaderProps) {
  return (
    <div className={cn(
      "flex items-center justify-center",
      sizeMap[size],
      className
    )}>
      <div className={cn(
        "rounded-full animate-bounce-small [animation-delay:-0.3s]",
        dotSizeMap[size],
        colorMap[color]
      )}></div>
      <div className={cn(
        "rounded-full animate-bounce-small [animation-delay:-0.15s]",
        dotSizeMap[size],
        colorMap[color]
      )}></div>
      <div className={cn(
        "rounded-full animate-bounce-small",
        dotSizeMap[size],
        colorMap[color]
      )}></div>
    </div>
  );
}
