// ui/button.tsx
import React from 'react';

export type ButtonProps = {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void; // Add event parameter
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit"; // Optional type prop
};

export function Button({ onClick, children, className, type = "button" }: ButtonProps) {
  return (
    <button onClick={onClick} className={`px-4 py-2 ${className}`} type={type}>
      {children}
    </button>
  );
}
