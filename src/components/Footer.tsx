import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="flex relative flex-col items-center px-20 pt-20 mt-10 w-full text-2xl font-semibold text-white min-h-[246px] max-md:px-5 max-md:max-w-full">
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/0cfb8d11c3e16bcafaacf889f5c950d5ee1dd6f261d0c8729611fc31106d9f09?placeholderIfAbsent=true&apiKey=fdb920437ed8445d849f278001ef01e4" alt="" className="object-cover absolute inset-0 size-full" />
      <div className="flex relative flex-col items-center max-w-full w-[511px]">
        <h2 className="leading-none">Need help?</h2>
        <a href="mailto:coopers@coopers.pro" className="mt-7 leading-none">coopers@coopers.pro</a>
        <p className="mt-5 text-sm">© 2021 Coopers. All rights reserved.</p>
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/eb8a902c58cc771c2dd54f40f3fc2e834be5d12dcd0cdb89b2e7a8ee5d761873?placeholderIfAbsent=true&apiKey=fdb920437ed8445d849f278001ef01e4" alt="" className="object-contain self-stretch mt-8 w-full aspect-[12.5] max-md:max-w-full" />
      </div>
    </footer>
  );
};

export default Footer;