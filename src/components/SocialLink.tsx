import * as React from 'react';
import { SocialLinkProps } from '../types/types';

export const SocialLink: React.FC<SocialLinkProps> = ({ icon, href, ariaLabel }) => {
  return (
    <div className="flex overflow-hidden flex-col justify-center items-center p-3 w-fit border border-solid border-zinc-500 rounded-[51px]">
      <a href={href} aria-label={ariaLabel}>
        <img
          loading="lazy"
          src={icon}
          alt=""
          className="object-contain aspect-square w-[22px] dark:text-white"
        />
      </a>
    </div>
  );
};