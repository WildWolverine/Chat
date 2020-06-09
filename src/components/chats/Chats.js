import React,{useState} from 'react'
import ChatItem from './ChatItem'
import Postdata from '../../data/data.json'
import InputForSearch from '../input/InputForSearch'

function Chats () {

    const [filterValue, setFilterValue] = useState('')
    const [chats, setChats] = useState(Postdata)

    const filteredChats = (e) =>{
        const filter =  Postdata.filter(chat => {
            return chat.dialog.user.fullname.toLowerCase().includes(e.target.value)
        })
        setChats(filter)
        setFilterValue(e.target.value)
    }
 
    return (
            <div className='chats'>
                <div className='chats__sidebar-input-background'>
                     <InputForSearch filterValue = {filterValue} filteredChats = {filteredChats} />
                     </div>
                <div className='chats__sidebar-item'> 
                    <div className='chats__sidebar-title'><h1>Chats</h1></div>
                    {chats.map(item => (
                         <ChatItem
                            user = {item.dialog}
                            avatar = {item.dialog}
                            message = {item.dialog}
                            date = {item.dialog}
                    />
                    
                ))}</div>
               
            </div>
    )
}

export default Chats