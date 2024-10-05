import React from 'react';

export const Avatar: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="avatar">{children}</div>;
};
