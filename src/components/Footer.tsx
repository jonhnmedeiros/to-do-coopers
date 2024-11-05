import React from 'react';
import Image from 'next/image'

const Footer: React.FC = () => {
  return (
    <footer className="relative flex flex-col items-center px-20 pt-20 mt-10 w-full text-2xl font-semibold text-white min-h-[246px] max-md:px-5 max-md:max-w-full">
      <Image src="/bg-footer-black.svg" alt="Rectangle green footer" width={1440} height={246} className='object-cover absolute inset-0 size-full' />
      <div className="relative flex flex-col items-center max-w-full w-[511px]">
        <h2 className="leading-none">Need help?</h2>
        <a href="mailto:coopers@coopers.pro" className="mt-7 leading-none">
          coopers@coopers.pro
        </a>
        <p className="mt-5 text-sm">© 2024 Coopers. All rights reserved.</p>
        <Image src="/bg-footer.svg" alt="Rectangle green footer" width={511} height={41} className='mt-8' />
      </div>
    </footer>
  );
};

export default Footer;
