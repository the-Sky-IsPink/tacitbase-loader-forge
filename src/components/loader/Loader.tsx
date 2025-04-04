
import React from 'react';
import { PulseLoader } from './PulseLoader';
import { SpinLoader } from './SpinLoader';
import { DotsLoader } from './DotsLoader';
import { GradientLoader } from './GradientLoader';

export type LoaderProps = {
  /**
   * The variant of the loader
   */
  variant?: 'pulse' | 'spin' | 'dots' | 'gradient-bar' | 'gradient-circle';
  /**
   * The size of the loader
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * The color theme of the loader
   */
  color?: 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'error';
  /**
   * Optional additional className
   */
  className?: string;
  /**
   * Label to show with the loader
   */
  label?: string;
  /**
   * Position of the label
   */
  labelPosition?: 'top' | 'bottom' | 'left' | 'right';
};

export function Loader({ 
  variant = 'spin',
  size = 'md', 
  color = 'primary',
  className,
  label,
  labelPosition = 'bottom'
}: LoaderProps) {
  // Render the loader based on the variant
  const renderLoader = () => {
    switch(variant) {
      case 'pulse':
        return <PulseLoader size={size} color={color} className={className} />;
      case 'dots':
        return <DotsLoader size={size} color={color} className={className} />;
      case 'gradient-bar':
        return <GradientLoader size={size} variant="bar" className={className} />;
      case 'gradient-circle':
        return <GradientLoader size={size} variant="circle" className={className} />;
      case 'spin':
      default:
        return <SpinLoader size={size} color={color} className={className} />;
    }
  };

  // Label positioning classes
  const containerClasses = {
    top: 'flex flex-col gap-2 items-center',
    bottom: 'flex flex-col gap-2 items-center',
    left: 'flex flex-row gap-3 items-center',
    right: 'flex flex-row-reverse gap-3 items-center',
  };

  return (
    <div className={containerClasses[labelPosition]}>
      {label && labelPosition === 'top' && (
        <span className="text-sm font-medium font-display">{label}</span>
      )}
      
      {renderLoader()}
      
      {label && labelPosition === 'bottom' && (
        <span className="text-sm font-medium font-display">{label}</span>
      )}
      
      {label && (labelPosition === 'left' || labelPosition === 'right') && (
        <span className="text-sm font-medium font-display">{label}</span>
      )}
    </div>
  );
}
