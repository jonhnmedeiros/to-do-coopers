import React from 'react';
import Logo from './Logo';
import NavigationButton from './NavigationButton';

interface HeaderProps {
  logoSrc: string;
}

const Header: React.FC<HeaderProps> = ({ logoSrc }) => {
  return (
    <header className="flex justify-between items-center p-6">
      <Logo src={logoSrc} alt="Company Logo" />
      <NavigationButton />
    </header>
  );
};

export default Header;