import { useEffect, useState } from 'react';
import Message from '../message/Message';
import './messages.scss';

const Messages = ({ messages, currentUser, recipient }) => {
	let msgRender = [];

	if (messages.length > 0) {
		msgRender = messages.map((el) => (
			<Message
				key={el.id}
				data={el}
				own={+el.author === +currentUser.id ? true : false}
				currentUser={currentUser}
				recipient={recipient}
			/>
		));
	}

	return <div className="messages-content">{msgRender}</div>;
};

export default Messages;
