import React from 'react'
import { Avatar, IconButton } from '@mui/material';
import "./Chat.css"
import { AttachFile, InsertEmoticon, MoreVert, SearchOutlined} from "@mui/icons-material"
const Chat = () => {
  return (
    <div className='flex flex-col basis-4/6'>
      <div className="chat__header p-5 flex items-center border-b border-b-gray-200">
        <Avatar />
        <div className="chat__headerInfo flex-1 pl-5">
          <h3 className="mb-1 font-medium" >Room name</h3>
          <p className= "text-gray-500 text-xs">Last seen at...</p>
        </div>
        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlined/>
          </IconButton>
          <IconButton>
            <AttachFile/>
          </IconButton>
          <IconButton>
            <MoreVert/>
          </IconButton>
        </div>
      </div>
      <div className="chat__body  flex-1 overflow-scroll">


        <p className='chat__message relative text-sm p-3 w-fit rounded-lg bg-slate-100 mb-7'>
          <span className='chat__name absolute top-[-18px] font-bold text-s'>Jayanth</span>  
          This is a message 
          <span className='chat__timestamp ml-2 text-s'>
            {new Date().toUTCString()}
          </span>
        </p>

        


        <p className='chat__receiver ml-auto bg-green-100 relative text-sm p-3 w-fit rounded-lg bg-slate-100 mb-7'>
          <span className='chat__name absolute top-[-18px] font-bold text-s'>Jayanth</span>
          This is a message 
          <span className='chat__timestamp ml-2 text-s'>
            {new Date().toUTCString()}
          </span>
        </p>



        <p className='chat__message relative text-sm p-3 w-fit rounded-lg bg-slate-100 mb-7'>
          <span className='chat__name absolute top-[-18px] font-bold text-s'>Jayanth</span>  
          This is a message 
          <span className='chat__timestamp ml-2 text-s'>
            {new Date().toUTCString()}
          </span>
        </p>
      </div>
      
    <div className="chat__footer flex justify-between items-center h-16 border-t-2 border-t-gray-200">
      <InsertEmoticon />
      <form className='flex-1 flex'>
        <input className='flex-1 rounded-3xl p-3 border-none' placeholder='Type a message' type="text" />
        <button className='hidden' type="submit">
          Send a message
        </button>
        </form>
    </div>

    </div>
  )
}

export default Chat