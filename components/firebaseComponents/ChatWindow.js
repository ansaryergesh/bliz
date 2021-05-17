import React from 'react';
import cookie from 'js-cookie'
import { dateParse } from '../../defaults/extraFunctions';
const ChatWindow = ({ messages = [], sendMessage, currentChat }) => {
  const [messageBody, setMessageBody] = React.useState('');
  const myId = cookie.get('active_user');
  // Sort messages into descending order by the date they were created
  const sortedMessages = messages.sort((a, b) => new Date(a.created).valueOf() - new Date(b.created).valueOf());

	return (
		<div className="messager__dialogue">
       <div className="messager__dialogue__header">
          {currentChat}
        </div>
			<div className="messager__dialogue__content">
				{sortedMessages.map(message => (
          
          <div className={`messager__dialogue__item ${myId===message.sender && 'mine'}`}>
            <span>{ myId===message.sender ? 'Вы:' : message.sender + ":"}</span><br></br>
            <span className='tinyDate'>{dateParse(message.created)}</span>
            <div className="messager__dialogue__item__content">
                <p>{message.body}</p>
            </div>
          </div>
				))}
			</div>
			<div className="messager__dialogue__type">
        <div className='messager__dialogue__type__form'>
          <input type='text' placeholder='Введите ваше сообщение…' value={messageBody} onChange={e => setMessageBody(e.target.value)} />
				  <button className="btn small" onClick={() => sendMessage(currentChat, messageBody)}><i className="fas fa-paper-plane"/>Отправить</button>
        </div>
			
			</div>
		</div>
	);
};

export default ChatWindow;


