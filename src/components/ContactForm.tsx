import React from 'react';

const ContactForm: React.FC = () => {
  return (
    <form className="flex flex-col self-center px-16 py-20 ml-3.5 max-w-full text-base bg-white rounded shadow-lg text-slate-900 w-[700px] max-md:px-5">
      <div className="flex gap-6 self-start text-2xl tracking-widest uppercase">
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/dd833fd019294e080bdbff3abf1ce1822fdde2fdf70e6ca97106e155c46d2b5a?placeholderIfAbsent=true&apiKey=fdb920437ed8445d849f278001ef01e4" alt="" className="object-contain shrink-0 aspect-square w-[60px]" />
        <div>
          GET IN <br />
          <span className="font-bold">TOUCH</span>
        </div>
      </div>
      <label htmlFor="name" className="self-start mt-10">Your name</label>
      <input
        type="text"
        id="name"
        placeholder="type your name here..."
        className="px-4 py-4 mt-2 bg-white rounded border border-solid border-slate-900 text-neutral-400 max-md:pr-5 max-md:max-w-full"
      />
      <div className="flex gap-5 justify-between mt-6 max-w-full whitespace-nowrap w-[391px]">
        <label htmlFor="email">Email*</label>
        <label htmlFor="telephone">Telephone*</label>
      </div>
      <div className="flex flex-wrap gap-5 mt-2 text-neutral-400 max-md:max-w-full">
        <input
          type="email"
          id="email"
          placeholder="example@example.com"
          className="grow px-4 py-4 whitespace-nowrap bg-white rounded border border-solid border-slate-900 w-fit max-md:pr-5"
          required
        />
        <input
          type="tel"
          id="telephone"
          placeholder="( ) ____-____"
          className="grow px-4 py-4 bg-white rounded border border-solid border-slate-900 w-fit max-md:pr-5"
          required
        />
      </div>
      <label htmlFor="message" className="self-start mt-6">Message*</label>
      <textarea
        id="message"
        placeholder="Type what you want to say to us"
        className="px-4 pt-4 pb-24 mt-2 bg-white rounded border border-solid border-slate-900 text-neutral-400 max-md:pr-5 max-md:pb-28 max-md:max-w-full"
        required
      ></textarea>
      <button type="submit" className="px-16 py-4 mt-10 font-bold tracking-widest text-center text-white uppercase bg-green-500 rounded max-md:px-5 max-md:max-w-full">
        Send now
      </button>
    </form>
  );
};

export default ContactForm;