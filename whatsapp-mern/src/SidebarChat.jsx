import { Avatar } from '@mui/material'
import React from 'react'
import './SidebarChat.css'
const SidebarChat = () => {
  return (
    <div className='sidebarChat__info flex p-5 gap-4 cursor-pointer border-b-2 border-b-slate-200 hover:bg-slate-200'>
        <Avatar />
        <div className="sidebarChat__info mr-4">
          <h2 className='text text-sm mb-2'>Room name</h2>
          <p>This is the last message </p>
        </div>
    </div>
  )
}

export default SidebarChat