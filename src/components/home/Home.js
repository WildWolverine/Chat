import React from 'react'
import Chats from '../chats/Chats'
import '../../styles/Home.css'
import Message from '../message/Message'


function Home ()  {
 
const iconUser = require('../../icon/icons-user.png')
const iconSearch = require('../../icon/icons-search.png')


    return (
        <div>
            
            <section className='home'>
                <div className='chats'>
                    <div className='chats__sidebar'>
                        <div className = 'chats__sidebar-header'>
                            <img src={iconUser} alt='Users icon'></img>
                        </div>
                        <div className = 'chats__sidebar-search'>
                            <i className='chats__sidebar--icons-search'><img src={iconSearch}/></i>
                            <input type='text' placeholder='Search or start new chat'></input>
                        </div>
                        <div className = 'chats__sidebar-chats'>
                            <div className='chats__sidebar-title'><h1>Chats</h1>
                            </div>
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