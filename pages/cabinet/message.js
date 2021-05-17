import { useEffect, useState } from "react"
import Messanger from "../../components/messanger/Messanger"
import BreadCumbs from "../../components/shared/BreadCumbsConfigure"
import firebase from '../../firebase'
import cookie from 'js-cookie'
import uuid from 'uuid'
import {getFromDatabase, saveToDatabase} from '../../fbdatabase/database'
import ActiveChats from "../../components/firebaseComponents/ActiveChat"
import ChatWindow from "../../components/firebaseComponents/ChatWindow"
const Message = () => {
  const userId= cookie.get('active_user')
  const [myActiveChats, setMyActiveChats] = useState([])
  const [currentChatMessages,setCurrentChatMessages] =useState([])
  
  const [currentChat,setCurrentChat] = useState(null)
  useEffect(() => {
    getFromDatabase(`/${userId}/chats`, res => {
      setMyActiveChats(Object.keys(res));
    });

    getFromDatabase(`/chats/${currentChat}/messages`, res => {
      setCurrentChatMessages(Object.values(res));
    });
  },[currentChat])

  const sendMessage = (chatName,body) => {
    const messageId = uuid()
    saveToDatabase(`/chats/${chatName}/messages/${messageId}`, {
      body, sender: cookie.get('active_user'), created: new Date().toISOString(),
    })
  }
  return (
    <div className="messager__container container">
      <div className="products__title">
        <BreadCumbs/>
        <h1 className="smaller_font">Мои сообщения</h1>
      </div>
      {/* <div className="chatbox">
      <ul className='chat-list'>
        {chats.length>0 && chats.map(chat => {
          
          return(
            <li key={chat.id}>
              <em>{postDate.getDate() + '/' + (postDate.getMonth()+1)}</em>								 
              <strong>{chat.user}:</strong> 								 
              {chat.message}
            </li>
          );
        })}
      </ul>
    </div> */}

      
      
      {/* <Messanger /> */}

      <div className="messager">
        <div className="messager__users">
          <div className="messager__users__header">
            <form className="messager__users__search">
              <input type="text" placeholder="Поиск по чатам"/>
              <i className="fas fa-search"/>
            </form>
          </div>
          <ActiveChats setCurrentChat={setCurrentChat} myActiveChats={myActiveChats} />
         
        </div>
        { currentChat && <ChatWindow sendMessage={sendMessage} currentChat={currentChat} messages={currentChatMessages} /> }
      </div>
    </div>
  )
}

export default Message;