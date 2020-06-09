import React from 'react'
import '../../styles/Message.css'
function MessageItem({avatar,text,date,isMe}) {
    return (
        <div>
            {!isMe ? 
            <div className='message__content'>
                <div className='message__avatar'>
                    <img src={avatar} alt={`Avatar $(user.fullname)`}/>
                </div>
                <div className='message_info'>
                    <div className='message__background'>
                        <p className='message__text'>{text.message}</p>
                    </div>
                    <span className='message__date'>
                        {date.date}
                    </span>
                </div>
            </div> 
            : <div className='message__content-itsMe'> 
                <div className='message__info-itsMe'>
                     <div className='message__background-itsMe'>
                         <p className='message__text-itsMe'>{text.messageMine}</p>
                </div>
                <span className='message__date-itsMe'>
                    {date.dateMine}
                </span>
                </div>
            </div>}
        </div>
    )
}

export default MessageItem

