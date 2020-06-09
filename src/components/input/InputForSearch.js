import React from 'react'

const searchIcon = require('../../icon/icons-search.png')

function InputForSearch({filterValue,filteredChats}) {

    return (
        <div className='chats__sidebar-search'>
            <i className='chats__sidebar--icons-search'><img src={searchIcon}/></i>
            <input type='text' value={filterValue} onChange = {filteredChats} placeholder='Search or start new chat'></input>
        </div>
    )
}

export default InputForSearch
