export interface TechStackItemProps {
    icon: string;
    name: string;
  }
  
  export interface ProjectCardProps {
    number: string;
    website: string;
    projectName: string;
    isDark?: boolean;
  }
  
  export interface SocialLinkProps {
    icon: string;
    href: string;
    ariaLabel: string;
  }