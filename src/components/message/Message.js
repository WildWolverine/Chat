import React, {useState} from 'react'
import axios from 'axios'
import dataMessage from '../../data/message.json'
import MessageItem from './MessageItem'
import InputForMessage from '../input/InputForMessage'

function Message() {

const [message, setMessage] = useState(dataMessage)
const [response, setResponse] = useState([])


   const addMessage = (text) => {
    setMessage(dataMessage.push({current_dialog : {id:"123",
   avatar: null,
   messageMine: text,
   dateMine: "04.06.2025",
   isMe: true}}))}
    

    const getResponse = () => {
        axios.get('https://api.chucknorris.io/jokes/random')
        .then(res => {
             let response = res.data
             let responseMessage = dataMessage.push({current_dialog : {id:response.id,
            avatar: 'https://avatarfiles.alphacoders.com/629/thumb-62922.jpg',
            message: response.value,
            date: "04.06.2025",
            isMe: false}
        })
            setResponse(responseMessage)
        })
        .catch(err=>console.log(err))
}
    return (
        <div>
            {console.log(dataMessage)}
            <div className='chats__dialog-messsage-item'>{dataMessage.map(item => 
                   <MessageItem
                   avatar = {item.current_dialog.avatar}
                   text = {item.current_dialog}
                   date = {item.current_dialog}
                   isMe = {item.current_dialog.isMe}
                   />
            )}</div>
            <div><InputForMessage addMessage={addMessage} getResponse={getResponse} /></div>
        </div>
    )
}

export default Message
