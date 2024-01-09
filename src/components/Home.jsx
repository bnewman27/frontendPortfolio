import React from 'react';
import '../input.css'; 

import '../images/ben.png'
import { CameraIcon } from '@heroicons/react/20/solid'

export default function Home() {
  return (
    <div className="overflow-hidden bg-gradient-tr from-sky-900 via-sky-800 to-sky-950">
      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="absolute bottom-0 left-3/4 top-0 hidden w-screen bg-gradient-tr from-sky-950 via-sky-800 to-sky-900 lg:block" />
        <div className="mx-auto max-w-prose text-base lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-8">
          <div className="bg-gradient-radial bg-clip-text from-sky-200 to-sky-300">
            <div className="bg-clip-text  text-4xl font-puffinLiquid text-transparent">Welcome!</div>
            
          </div>
        </div>
        <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="relative lg:col-start-2 lg:row-start-1">
            <svg
              className="absolute right-0 top-0 -mr-20 -mt-20 hidden lg:block"
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
                <div className="aspect-h-7 aspect-w-12  lg:aspect-none">
                  <img
                    className="rounded-lg object-cover object-center shadow-lg"
                    src="/images/ben.png"
                    alt="Ben playing his Juno with Country Club at Still Smoking (circa 2019)"
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
          <div className="mt-8 lg:mt-0">
            <div className="mx-auto max-w-prose text-base lg:max-w-none">
              <p className="text-2xl font-puffinRegular text-dms">
                With a diverse set of skills and a passion for learning, I make a great addition to any team. I'm a front-end developer with a background in music, sound design, audio engineering, and music administration. I'm a quick learner, a hard worker, and I'm always looking for new challenges.
              </p>
            </div>
            <div className="prose prose-indigo mx-auto mt-5 text-dms font-puffinRegular lg:col-start-1 lg:row-start-1 lg:max-w-none">
              <p className="text-3xl">
                Education
              </p>
              <p className="text-2xl">
                Master's Certificate in Software Development, California State University, Long Beach 
                </p>
              <p className="text-lg">
                400-hour full-stack web development bootcamp detailing the MERN stack (MongoDB, Express, React, Node.js) and the PERN stack (PostgreSQL, Express, React, Node.js).
                As well as HTML, CSS, JavaScript, jQuery, TypeScript, Python, TailwindCSS, Bootstrap, APIs, JSON, MySQL, Sequelize, Git, GitHub, and more.
              </p>
              <p className="text-3xl">
                Other Things I'm Up To These Days
                </p>
                <div className="text-lg text-center">
              <p>
                In addition to pursuing a career in software development, I manage the Independet Psych Rock / Cumbia / Dance Band Valley Wolf. I provide support in many aspects of the band's operations from:
              </p>
              <div className="grid grid-cols-3 space-x-2 ">
              <ul className="text-center"role="list">
                <li>Booking</li>
                <li>Marketing</li>
                <li>Merchandise</li>
              </ul>
              <p className="text-center align-center text-xl">
                to
              </p>
              <ul className="text-center" role="list">
                <li>Web Development</li>
                <li>Tour Management</li>
                <li>Touring Sound Engineer</li>
              </ul>
              </div>
              <p>
                Rhoncus nisl, libero egestas diam fermentum dui. At quis tincidunt vel ultricies. Vulputate aliquet
                velit faucibus semper. Pellentesque in venenatis vestibulum consectetur nibh id. In id ut tempus
                egestas. Enim sit aliquam nec, a. Morbi enim fermentum lacus in. Viverra.
              </p>
              <h3>How we helped</h3>
              <p>
                Tincidunt integer commodo, cursus etiam aliquam neque, et. Consectetur pretium in volutpat, diam.
                Montes, magna cursus nulla feugiat dignissim id lobortis amet. Laoreet sem est phasellus eu proin massa,
                lectus. Diam rutrum posuere donec ultricies non morbi. Mi a platea auctor mi.
              </p>
              <p>
                Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna sed consectetur neque tristique
                pellentesque. Blandit amet, sed aenean erat arcu morbi.
              </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
