import React from 'react';

import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'

function Contact() {
  return (
    <div className="relative isolate bg-sky-800">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2  bg-gradient-t from-sky-950 via-sky-400 to-sky-950 bg-clip-text">
        <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-sky-950 ring-1 ring-gray-900/10 lg:w-1/2">
            </div>
            <div className="">
            <h2 className="text-8xl font-puffinLiquid tracking-tight sm:text-sky-400 md:text-sky-400 text-transparent">Get in touch</h2>
            
            <p className="mt-6 text-2xl font-puffinRegular leading-8  text-sky-400">
              Hopefully you're here to offer me work, but if not, that's cool too. Reach out and let's make it happen!
            </p>
            <dl className="mt-10 space-y-4 font-puffinRegular text-xl leading-7 text-transparent">
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Telephone</span>
                  <PhoneIcon className="h-7 w-6 text-sky-400" aria-hidden="true" />
                </dt>
                <dd>
                  <a className="hover:text-sky-200 sm:text-sky-400"  href="tel:+1 (209) 614-3675">
                  +1 (209) 614-3675
                  </a>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Email</span>
                  <EnvelopeIcon className="h-7 w-6 text-sky-400" aria-hidden="true" />
                </dt>
                <dd>
                  <a className="hover:text-sky-200 sm:text-sky-400 font-puffinRegular"  href="mailto:ben.newman5277@gmail.com">
                  ben.newman5277@gmail.com
                  </a>
                </dd>
              </div>
            </dl>
          </div>
          </div>
        </div>
        <div className="bg-sky-200">
        <form action="#" method="POST" className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48 bg-sky-800">
          <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
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
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-sky-300 bg-sky-950 shadow-sm ring-1 ring-inset ring-sky-600 placeholder:text-sky-400 focus:ring-2 focus:ring-inset focus:ring-sky-800 sm:text-sm sm:leading-6"
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
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-sky-300 bg-sky-950 shadow-sm ring-1 ring-inset ring-sky-600 placeholder:text-sky-400 focus:ring-2 focus:ring-inset focus:ring-sky-800 sm:text-sm sm:leading-6"
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
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-sky-300 bg-sky-950 shadow-sm ring-1 ring-inset ring-sky-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-800 sm:text-sm sm:leading-6"
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
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-sky-300 bg-sky-950 shadow-sm ring-1 ring-inset ring-sky-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-800 sm:text-sm sm:leading-6"
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
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-sky-300 bg-sky-950 shadow-sm ring-1 ring-inset ring-sky-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-800 sm:text-sm sm:leading-6"
                    defaultValue={''}
                  />
                </div>
              </div>
            </div>
            <div className="mt-8 flex justify-end">
              <button
                type="submit"
                className="rounded-full text-sky-200 bg-sky-950 px-3.5 py-2.5 text-center text-sm font-puffinLiquid  shadow-sm ring ring-sky-800 hover:bg-sky-800 hover:ring-sky-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-950"
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
