import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from './Sidebar'
import Chat from './Chat'

function App() {

  return (
    <div className='app grid place-items-center h-screen bg-gray-300'>
      <div className="app_body flex bg-gray-100 h-90v w-90w shadow-md ">
        <Sidebar/>
        <Chat />
      </div>
    </div>
  )
}

export default App
