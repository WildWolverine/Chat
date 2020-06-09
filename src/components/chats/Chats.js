import React from 'react'
import ChatItem from './ChatItem'
import Postdata from '../../data/data.json'
function Chats () {

    return (
            <div className='chats'>
                {Postdata.map(item => (
                    <ChatItem
                        user = {item.dialog}
                        avatar = {item.dialog}
                        message = {item.dialog}
                        date = {item.dialog}
                    />
                    
                ))}
            </div>
    )
}

export default Chats