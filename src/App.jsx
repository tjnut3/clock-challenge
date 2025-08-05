import { React } from 'react'
import './App.css'

import Quote from './Quote'
import Time from './Time'

function App() {
  return (
    <>
      <div className='App my-16 mx-41 grid grid-cols-2 grid-rows-2'>
        <div className=''>
          <Quote />
        </div>
        <div>
          
        </div>
        <div className=''>
          <Time />
        </div>
        <div className='row-span-2'>

        </div>
      </div>
    </>
  )
}

export default App
