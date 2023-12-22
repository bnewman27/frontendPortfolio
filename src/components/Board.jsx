import React from 'react'
import '../input.css'


const highscore = [
    { id: 1, name: 'High Score', value: '{high score}' },
  ]
  
  export default function Board() {
    return (
      <div className="text-dmtext">
        <div className="">
          <dl className="">
            {highscore.map((highscore) => (
              <div key={highscore.id} className="grid grid-cols-2 grid-rows-2 ">
                <dt className="bg-dms">{highscore.name}</dt>
                <dd className="bg-dms">
                  {highscore.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    )
  }

