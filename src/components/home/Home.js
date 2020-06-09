import React from 'react'
import Chats from '../chats/Chats'
import '../../styles/Home.css'
import Message from '../message/Message'


function Home ()  {
 
const userIcon = require('../../icon/icons-user.png')



    return (
        <div>
            
            <section className='home'>
                <div className='chats'>
                    <div className='chats__sidebar'>
                        <div className = 'chats__sidebar-header'>
                            <img src={userIcon} alt='Users icon'></img>
                        </div>
                        
                        <div className = 'chats__sidebar-chats'>
                           
                        <Chats/>
                               
                        </div>
                    </div>
                    <div className='chats__dialog'>
                        <div className='chats__dialog-header'>  
                            <div className='chats__dialog-user-img'>
                                <img src='https://avatarfiles.alphacoders.com/629/thumb-62922.jpg'></img></div>        
                            <div className='chats__dialog-user-fullname'><p>Naruto</p></div>
                        </div>
                        <div className='chats__dialog-message'>
                            <Message/>
                        </div>
                    </div>
                </div>
                <footer className='home__footer'></footer>
            </section>
        </div>
    )
}

export default Home