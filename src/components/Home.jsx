  import React from 'react';
  import '../input.css'; 
  import { CameraIcon } from '@heroicons/react/20/solid'


function Home() {
    return (
      <div className="overflow-hidden bg-gradient-tr from-sky-900 via-sky-800 to-sky-950  ">
        <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="absolute bottom-0 left-3/4 top-0 hidden w-screen bg-gradient-tr from-sky-950 via-sky-800 to-sky-900 lg:block shadow-inner shadow-dmbg" />
          <div className="mx-auto max-w-prose text-base lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-8 ">
          </div>
          <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8 ">
            <div className="relative lg:col-start-2 lg:row-start-1 ">
              <svg
                className="absolute right-0 top-0 -mr-20 -mt-20 hidden lg:block shadow-md shadow-sky-950"
                width={404}
                height={384}
                fill="none"
                viewBox="0 0 404 384"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                  </pattern>
                </defs>
                <rect width={404} height={384} fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)" />
              </svg>
              <div className="relative mx-auto max-w-prose text-base lg:max-w-none">
                <figure>
                  <div className="bg-profile bg-sky-200 bg-contain">
                    <img
                      className="object-fill bg-contain shadow-dmbg shadow-lg rounded-lg"
                      alt="Me, Ben, playing my Juno with Country Club at Still Smoking in Modesto, CA (circa 2019)"
                      width={1010}
                      height={1280}
                      />
                  </div>
                  <figcaption className="mt-3 flex text-sm text-dms">
                    <CameraIcon className="h-5 w-5 flex-none text-dms" aria-hidden="true" />
                    <span className="ml-2 font-puffinRegular">Photograph by Haley Bagne</span>
                  </figcaption>
                </figure>
              </div>
            </div>
            <div className=" text-left mt-8 lg:mt-0 block w-full rounded-md border-0 px-3.5 py-2 text-sky-200 bg-sky-800 shadow-lg shadow-dmbg ring-1 ring-inset ring-sky-600 hover:ring-2 hover:ring-inset hover:ring-sky-600 sm:text-sm sm:leading-6">
              <div className="mx-auto max-w-prose text-sky-200 lg:max-w-none font-puffinRegular">
              <p className="text-4xl pb-3 text-sky-200">
                  Welcome!
                </p>
                <p className="text-2xl  text-sky-300">
                  With a diverse set of skills and a passion for learning, I make a great addition to any team. I'm a front-end developer with a background in music, sound design, audio engineering, and music administration. I'm a quick learner, a hard worker, and I'm always looking for new challenges.
                </p>
              </div>
              <div className="prose prose-indigo mx-auto mt-5 text-sky-300 font-puffinRegular lg:col-start-1 lg:row-start-1 lg:max-w-none">
                <p className="text-4xl pb-3 text-sky-200">
                  Education
                </p>
                <p className="text-2xl pb-1 text-sky-300">
                  Master's Certificate in Software Development, California State University, Long Beach 
                  </p>
                <p className="text-lg text-sky-300">
                  400-hour full-stack web development bootcamp where i learned how to develop with the MERN stack (MongoDB, Express, React, Node.js), the PERN stack (PostgreSQL, Express, React, Node.js),
                  As well as HTML, CSS, JavaScript, TypeScript, jQuery, TypeScript, Python, TailwindCSS, Bootstrap, APIs, JSON, MySQL, Sequelize, Git, GitHub, and more.
                </p>
                <p className="text-4xl p-2 text-sky-200">Other Things I'm Up To These Days
                  </p>
                  <div className="text-lg ">
                <p>
                  In addition to pursuing a career in software development, I manage Modesto, California's very own Independent Psych Rock / Cumbia / Dance Band Valley Wolf. I provide support in many aspects of the band's operations like:
                </p>
                <div className="grid grid-cols-2 space-x-1 ">
                <ul className="text-center">
                  <li>Booking</li>
                  <li>Marketing</li>
                  <li>Merchandise</li>
                </ul>
                <ul className="text-center">
                  <li>Web Development</li>
                  <li>Tour Management</li>
                  <li>Tour Sound Engineer</li>
                </ul>
                </div>
                <p className="text-center align-center text-lg">
                  </p>
                <p className="pt-2">
                  In the spring of 2023, I wrote the title track 'Spinning in Circles' for the film "Smoking in Circles".
                  The film has 2 awards to date.
                </p>
                <p className="pt-2">
                  In my spare time, I compose arrangments for various projects when the time allows.
                </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    )
  }
  
  export default Home;