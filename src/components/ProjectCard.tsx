import * as React from 'react';
import { ProjectCardProps } from '../types/types';

export const ProjectCard: React.FC<ProjectCardProps> = ({ number, website, projectName, isDark = false }) => {
  const baseClasses = "flex overflow-hidden flex-wrap flex-full grow shrink gap-8 items-start px-9 py-10 rounded-3xl h-72 w-[250px] max-md:px-5 ";
  const colorClasses = isDark ? "bg-slate-700 dark:bg-[#5EEAD4]" : "bg-gray-100 ";
  const textClasses = isDark ? "text-white dark:text-[#000]" : "text-slate-700";

  return (
    <div className={`${baseClasses} ${colorClasses} `}>
      <div className={`text-5xl leading-tight ${isDark ? "text-stone-50 dark:text-[#000]" : "text-slate-700"}`}>
        {number}
      </div>
      <img
        loading="lazy"
        src={isDark ? "https://cdn.builder.io/api/v1/image/assets/TEMP/2a8c3ae3fb8e5d54c680ca77f2b4eb5b20f83e3ee966095d6e858fde27ce86ec?placeholderIfAbsent=true&apiKey=c1fb100e7549410c9892db98e44f1418" : "https://cdn.builder.io/api/v1/image/assets/TEMP/e357f499af03105ce2899026693f2a23e077810191ac53eff758022f1e2c54f3?placeholderIfAbsent=true&apiKey=c1fb100e7549410c9892db98e44f1418"}
        alt="Project icon"
        className="object-contain shrink-0 w-6 aspect-square"
      />
      <div className={`grow shrink text-base ${textClasses} w-[201px]`}>
        Website:
        <br />
        <span className="font-bold"><a href={website}>{website}</a></span>
        <br />
        <br />
        Project name:
        <br />
        <span className="font-bold">{projectName}</span>
      </div>
    </div>
  );
};