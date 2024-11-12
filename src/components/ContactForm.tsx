import React from 'react';
import Image from 'next/image'

const ContactForm: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async function handleSubmit(e:any) {
    e.preventDefault();
    const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify({
            access_key: process.env.NEXT_PUBLIC_WEB3FORMS_API_KEY,
            name: e.target.name.value,
            email: e.target.email.value,
            telephone: e.target.telephone.value,
            message: e.target.message.value,
        }),
    });
    const result = await response.json();
    if (result.success) {
        console.log(result);
        e.target.reset();
    }
}

  return (
    <form onSubmit={handleSubmit} className="flex flex-col self-center px-16 py-20 max-w-full text-base bg-white rounded shadow-lg text-slate-900 w-[700px] max-md:px-5">
      <div className="flex gap-6 self-start text-2xl tracking-widest uppercase">
        <Image src="/icon-mail.png" alt="Icon mail" width={60} height={60}/>
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
