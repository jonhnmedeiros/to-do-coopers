import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative flex flex-col items-start pt-14 pr-20 pb-28 mt-14 w-full min-h-[482px] max-md:pr-5 max-md:pb-24 max-md:mt-10 max-md:max-w-full">
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/69fffc7c0f3a0dca0d6d31b7c05aa4565fb40a3bf67c6cfa4b94bf7a6d9fa054?placeholderIfAbsent=true&apiKey=fdb920437ed8445d849f278001ef01e4" alt="" className="object-cover absolute inset-0 size-full" />
      <h1 className="relative text-6xl font-bold text-green-500 leading-[64px] max-md:max-w-full max-md:text-4xl max-md:leading-10">
        <span className="text-7xl text-black">Organize</span>
        <br />
        <span>your daily jobs</span>
      </h1>
      <a href="#todo-list" className="relative px-14 py-5 mt-28 mb-0 text-2xl font-semibold text-center text-white bg-green-500 rounded-xl max-md:px-5 max-md:mt-10 max-md:mb-2.5">
        Go to To-do list
      </a>
    </section>
  );
};

export default Hero;