import * as React from 'react';
import { TechStackItemProps } from '../types/types';

export const TechStackItem: React.FC<TechStackItemProps> = ({ icon, name }) => {
  return (
    <div className="flex overflow-hidden gap-1.5 justify-center items-center px-2 py-1 bg-gray-200 rounded">
      <img
        loading="lazy"
        src={icon}
        alt={`${name} icon`}
        className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
      />
      <div className="self-stretch my-auto">{name}</div>
    </div>
  );
};