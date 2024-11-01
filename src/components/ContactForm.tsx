import React from 'react';
import Image from 'next/image'

const ContactForm: React.FC = () => {
  return (
    <form className="flex flex-col self-center px-16 py-20 max-w-full text-base bg-white rounded shadow-lg text-slate-900 w-[700px] max-md:px-5">
      <div className="flex gap-6 self-start text-2xl tracking-widest uppercase">
        {/* <img src="/icon-mail.png" alt="" className="object-contain shrink-0 aspect-square w-[60px]" /> */}
        <Image src="/icon-mail.png" alt="Woman pointing to up right" width={60} height={60}/>
        <div>
          GET IN <br />
          <span className="font-bold">TOUCH</span>
        </div>
      </div>
      <label htmlFor="name" className="self-start mt-10">
        Your name
      </label>
      <input
        type="text"
        id="name"
        className="px-4 py-4 mt-2 bg-white rounded border border-solid border-slate-900 text-neutral-400 max-md:pr-5 max-md:max-w-full"
        placeholder="type your name here..."
      />
      <div className="flex gap-5 justify-between mt-6 max-w-full whitespace-nowrap w-[391px]">
        <label htmlFor="email">Email*</label>
        <label htmlFor="telephone">Telephone*</label>
      </div>
      <div className="flex flex-wrap gap-5 mt-2 text-neutral-400 max-md:max-w-full">
        <input
          type="email"
          id="email"
          className="grow px-4 py-4 whitespace-nowrap bg-white rounded border border-solid border-slate-900 w-fit max-md:pr-5"
          placeholder="example@example.com"
          required
        />
        <input
          type="tel"
          id="telephone"
          className="grow px-4 py-4 bg-white rounded border border-solid border-slate-900 w-fit max-md:pr-5"
          placeholder="( ) ____-____"
          required
        />
      </div>
      <label htmlFor="message" className="self-start mt-6">
        Message*
      </label>
      <textarea
        id="message"
        className="px-4 pt-4 pb-24 mt-2 bg-white rounded border border-solid border-slate-900 text-neutral-400 max-md:pr-5 max-md:pb-28 max-md:max-w-full"
        placeholder="Type what you want to say to us"
        required
      ></textarea>
      <button
        type="submit"
        className="px-16 py-4 mt-10 font-bold tracking-widest text-center text-white uppercase bg-green-500 rounded max-md:px-5 max-md:max-w-full"
      >
        Send now
      </button>
    </form>
  );
};

export default ContactForm;
