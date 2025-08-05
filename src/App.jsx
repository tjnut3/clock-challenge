import { React } from 'react'
import './App.css'

import Quote from './Quote'
import Time from './Time'
import More from './More'

function App() {
  return (
    <>
      <div className='App py-16 px-41 grid grid-cols-2 grid-rows-2 min-h-screen'>
        <div className=''>
          <Quote />
        </div>
        <div>
          
        </div>
        <div className='flex items-end'>
          <Time />
        </div>
        <div className='flex row-span-2 items-end justify-end'>
          <More />
        </div>
      </div>
    </>
  )
}

export default App
