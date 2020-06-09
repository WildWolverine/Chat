import React,{useState,} from 'react'
function InputForMessage({addMessage, getResponse}) {
    const iconSend = require('../../icon/icons-send.png')
    const [text,SetText] = useState('')

const handleSubmit = (e)=>{
    e.preventDefault()
    addMessage(text)
    SetText('')
    getResponse()
}


    return (
            <form onSubmit={handleSubmit}>
            <input type='text' placeholder='Type your message' onChange={e => SetText(e.target.value)} value={text}/>
             <button className='chats__dialog-btn-send' type='submit'>
                 <i className='chats__dialog--icons-send'><img src={iconSend}></img></i>
            </button>
            </form>
    )
}

export default InputForMessage
