import React, { useState } from 'react'
import './App.css'

import Quote from './Quote'
import Time from './Time'
import More from './More'
import Expanded from './Expanded'

function App() {
  const [isDay, setIsDay] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);

  function handleChangeDay(value) {
    setIsDay(value);
  }

  function handleToggleMore() {
    setIsExpanded(!isExpanded);
  }

  return (
    <>
      <div className={`${isDay ? 'bg-[url("./assets/desktop/bg-image-daytime.jpg")]'
                               : 'bg-[url("./assets/desktop/bg-image-nighttime.jpg")]'
                        } App py-16 px-41 grid grid-cols-2 grid-rows-2 min-h-screen bg-cover relative`}>
        {!isExpanded && (
        <>
        <div>
          <Quote />
        </div>
        <div></div>
        </>
        )}
        <div className="flex items-end justify-between col-span-2">
         <Time onChangeDay={handleChangeDay} />
         <More onToggleMore={handleToggleMore} />
       </div>
        {isExpanded && (
        <div className="absolute inset-x-0 z-10 bottom-0 bg-white/75 backdrop-blur-md mt-15">
          <Expanded />
        </div>
        )}
      </div>
    </>
  )
}

export default App
