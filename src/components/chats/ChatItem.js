import React from 'react'
import '../../styles/Chats.css'

function ChatItem ({user,avatar,message,date}) {
    return (
            <div className='chats__item'>
                <div className='chats__item-users'>
                    <img src= {avatar.user.avatar} alt='Users icon'/>
                </div>
                <div className='chats__users-info'>
                    <div className='chats__info-top'>
                        <p className='chats__top-name'>{user.user.fullname}</p>
                        <span className='chats__top-date'>{date.message.date}</span>
                    </div>
                    <div className='chats__users-bottom'>
                        <p>{message.message.text}</p>
                    </div>
                </div>

            </div>
    )
}

export default ChatItem