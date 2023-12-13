import React from 'react'
import '../input.css'


const stats = [
    { id: 1, name: 'High Score', value: '{high score}' },
  ]
  
  export default function Board() {
    return (
      <div className=" text-dmtext  ">
        <div className="  ">
          <dl className="   ">
            {stats.map((stat) => (
              <div key={stat.id} className="grid grid-cols-2 grid-rows-2 ">
                <dt className="bg-dms">{stat.name}</dt>
                <dd className="bg-dms ">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    )
  }

