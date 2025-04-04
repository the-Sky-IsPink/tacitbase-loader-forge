
import React from 'react';
import { cn } from "@/lib/utils";
import { Loader } from "lucide-react";

type SpinLoaderProps = {
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'error';
  className?: string;
};

const sizeMap = {
  sm: 'w-4 h-4',
  md: 'w-6 h-6',
  lg: 'w-10 h-10',
};

const colorMap = {
  primary: 'text-primary',
  secondary: 'text-secondary-DEFAULT',
  accent: 'text-accent-DEFAULT',
  success: 'text-success-DEFAULT',
  warning: 'text-warning-DEFAULT',
  error: 'text-error-DEFAULT',
};

export function SpinLoader({ 
  size = 'md', 
  color = 'primary',
  className 
}: SpinLoaderProps) {
  return (
    <Loader 
      className={cn(
        "animate-spin-slow",
        sizeMap[size],
        colorMap[color],
        className
      )} 
    />
  );
}
