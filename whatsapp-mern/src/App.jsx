import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from './Sidebar'
import Chat from './Chat'
import axios from "./axios"
import Pusher from "pusher-js"
function App() {
  const [messages, setMessages] = useState([])

  useEffect(() => {
    axios.get("/messages/sync")
    .then(response=>setMessages(response.data))
  }, [])
  


  useEffect(() => {
    var pusher = new Pusher('887924064f717a8de8a2', {
      cluster: 'ap2'
    });

    var channel = pusher.subscribe('messages');
    channel.bind('inserted', function(data) {
      setMessages([...messages, data])
    });
    return ()=>{
      channel.unbind_all();
      channel.unsubscribe()
    }
  }, [messages])
  console.log(messages)
  return (
    <div className='app grid place-items-center h-screen bg-gray-300'>
      <div className="app_body flex bg-gray-100 h-90 v w-90w shadow-md ">
        <Sidebar/>
        <Chat messages={messages}/>
      </div>
    </div>
  )
}

export default App
