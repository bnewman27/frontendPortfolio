import React from 'react';
import '../input.css';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = React.createRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('contact_form', 'contact_form', form.current, {publicKey: 'fojC6R_amavvwZGQy',})
    .then(
    () => {
      console.log('SUCCESS!');
    },
    (error) => {
      console.log('FAILED...', error.text);
    },
    )
  };



  return (
    <div className="relative isolate bg-sky-800 shadow-inner shadow-dmbg">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2  bg-gradient-t from-sky-950 via-sky-400 to-sky-950 bg-clip-text ">
        <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48 ">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg ">
            <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-sky-950  lg:w-1/2 shadow-inner shadow-dmbg">
            </div>
            <div className="">
            <h2 className="text-8xl font-puffinLiquid tracking-tight sm:text-sky-400 md:text-sky-400 text-transparent">Get in touch</h2>
            
            <p className="mt-6 text-2xl font-puffinRegular leading-8  text-sky-400">
              Hopefully you're here to offer me work, but if not, that's cool too. Reach out and let's make it happen!
            </p>
            <dl className="mt-10 space-y-4 font-puffinRegular text-xl leading-7 text-transparent">
              <div className="flex gap-x-4 stroke-sky-400 hover:stroke-sky-200 fill-sky-950 sm:text-sky-400 hover:text-sky-200 ">
                <dt className="flex-none">
                  <span className="sr-only">Telephone</span>
                      <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" stroke-width="1.5" className="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z" />
                      </svg>
                </dt>
                <dd>
                  <a className=""  href="tel:+1 (209) 614-3675">
                  +1 (209) 614-3675
                  </a>
                </dd>
              </div>
              <div className="flex gap-x-4 stroke-sky-400 hover:stroke-sky-200 fill-sky-950 sm:text-sky-400 hover:text-sky-200 ">
                <dt className="flex-none">
                  <span className="sr-only">Email</span>
                  <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" stroke-width="1.5" className="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>
                </dt>
                <dd>
                  <a className=" font-puffinRegular"  href="mailto:ben.newman5277@gmail.com">
                  ben.newman5277@gmail.com
                  </a>
                </dd>
              </div>
            </dl>
          </div>
          </div>
        </div>
        <div className="bg-sky-200 ">

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48 bg-sky-800 shadow-2xl shadow-dmbg">
          <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 ">
              <div>
                <label htmlFor="first-name" className="block text-lg font-puffinLiquid leading-6 text-sky-400 ">
                  First Name
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="block font-puffinRegular text-sm w-full rounded-md border-0 px-3.5 py-2 text-sky-300 bg-sky-950 shadow-sm shadow-sky-950 hover:shadow-dmbg hover:shadow-inner ring-1 ring-inset ring-sky-600 placeholder:text-sky-400 focus:ring-2 focus:ring-inset focus:ring-sky-800 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="last-name" className="block text-lg font-puffinLiquid leading-6 text-sky-400">
                  Last Name
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    className="block font-puffinRegular text-sm  w-full rounded-md border-0 px-3.5 py-2 text-sky-300 bg-sky-950 shadow-sm shadow-sky-950 hover:shadow-dmbg hover:shadow-inner ring-1 ring-inset ring-sky-600 placeholder:text-sky-400 focus:ring-2 focus:ring-inset focus:ring-sky-800 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-lg font-puffinRegular leading-6 text-sky-400">
                  Email
                </label>
                <div className="mt-2.5">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    className="block font-puffinRegular text-sm  w-full rounded-md border-0 px-3.5 py-2 text-sky-300 bg-sky-950 shadow-sm shadow-sky-950 hover:shadow-dmbg hover:shadow-inner ring-1 ring-inset ring-sky-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-800 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="phone-number" className="block text-lg font-puffinLiquid leading-6 text-sky-400">
                  Phone Number
                </label>
                <div className="mt-2.5">
                  <input
                    type="tel"
                    name="phone-number"
                    id="phone-number"
                    autoComplete="tel"
                    className="block font-puffinRegular text-sm  w-full rounded-md border-0 px-3.5 py-2 text-sky-300 bg-sky-950 shadow-sm shadow-sky-950 hover:shadow-dmbg hover:shadow-inner ring-1 ring-inset ring-sky-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-800 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-lg font-puffinRegular leading-6 text-sky-400">
                  Message
                </label>
                <div className="mt-2.5">
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    className="block font-puffinRegular text-sm  w-full rounded-md border-0 px-3.5 py-2 text-sky-300 bg-sky-950 shadow-sm shadow-sky-950 hover:shadow-dmbg hover:shadow-inner ring-1 ring-inset ring-sky-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-800 sm:text-sm sm:leading-6"
                    defaultValue={''}
                  />
                </div>
              </div>
            </div>
            <div className="mt-8 flex justify-end">
              <button
                type="submit"
                className="rounded-full text-md text-sky-200 bg-sky-950 px-3.5 py-2.5 text-center font-puffinLiquid ring-1 ring-inset ring-sky-600 shadow-sm shadow-sky-950 hover:shadow-dmbg hover:shadow-inner hover:bg-sky-950 hover:text-sky-400  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-950"
              >
                Send Message
              </button>
            </div>
          </div>
        </form>
        </div>
      </div>
    </div>
  )
}

export default Contact;


