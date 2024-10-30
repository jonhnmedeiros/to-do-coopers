import React from 'react';

interface LogoProps {
  src: string;
  alt: string;
}

const Logo: React.FC<LogoProps> = ({ src, alt }) => {
  return <img src={src} alt={alt} className="object-contain max-w-full aspect-[4.35] w-[217px]" />;
};

export default Logo;