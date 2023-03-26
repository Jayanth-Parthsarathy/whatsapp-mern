import React from 'react'
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import { Avatar, IconButton } from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import "./Sidebar.css"
import SidebarChat from './SidebarChat';
const Sidebar = () => {
  return (
    <div className='flex flex-col basis-2/6'>
        <div className="sidebar__header flex justify-between p-5 border-r-1 border-gray-300">
            <Avatar src='https://avatars.githubusercontent.com/u/86654557?s=96&v=4' />
            <div className="sidebar__headerRight flex items-center justify-between">
                <IconButton>
                    <DonutLargeIcon />
                </IconButton>
                <IconButton>
                    <ChatIcon />
                </IconButton>
                <IconButton>
                    <MoreVertIcon />
                </IconButton>
            </div> 
        </div>
        <div className="sidebar__search flex items-center bg-slate-100 h-10 p-3">
            <div className="sidebar__searchContainer flex items-center bg-white w-full h-9 rounded-3xl">
                <SearchOutlinedIcon />
                <input type="text" className='text-xs outline-0 border-0 ml-3' placeholder='Search or start a new chat' />
            </div>
        </div>
        <div className="sidebar__chat bg-white overflow-scroll flex-1">
             <SidebarChat />
             <SidebarChat />
             <SidebarChat />

        </div>
    </div>
  )
}

export default Sidebar