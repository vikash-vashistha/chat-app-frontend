import React from 'react'
import { ChatState } from '../Context/ChatProvider'

export const SingleChat = ({ fetchAgain, setFetchAgain }) => {
  const {user, selectedChat, setSelectedChat} = ChatState()

  return (
    <div>SingleChat</div>
  )
}
