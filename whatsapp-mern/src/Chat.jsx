import React, { useState } from 'react'
import { Avatar, IconButton } from '@mui/material';
import "./Chat.css"
import axios from "./axios"
import { AttachFile, InsertEmoticon, MoreVert, SearchOutlined} from "@mui/icons-material"
const Chat = ({messages}) => {
  const [input, setInput] = useState("")
const sendMessage = async (e)=>{
  e.preventDefault();
  await axios.post("/messages/new", {
    name:"jayanth",
    message:input,
    timestamp:Date.now(),
    received:true,
  })
  setInput('')
}

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

        {messages.map(message=>(
          <p className={`chat__message ${message.received && "ml-auto bg-green-200"} relative text-sm p-3 w-fit rounded-lg bg-slate-100 mb-7`}>
          <span className='chat__name absolute top-[-18px] font-bold text-s'>{message.name}</span>  
          {message.message}
          <span className='chat__timestamp ml-2 text-s'>
            {message.timestamp}
          </span>
        </p>
        ))}
      </div>
      
    <div className="chat__footer flex justify-between items-center h-16 border-t-2 border-t-gray-200">
      <InsertEmoticon />
      <form className='flex-1 flex'>
        <input value={input} onChange={(e)=>setInput(e.target.value)} className='flex-1 rounded-3xl p-3 border-none' placeholder='Type a message' type="text" />
        <button onClick= {sendMessage} className='hidden' type="submit">
          Send a message
        </button>
        </form>
    </div>

    </div>
  )
}

export default Chat