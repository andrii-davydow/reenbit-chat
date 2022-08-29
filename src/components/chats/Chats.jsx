import Chat from '../chat/Chat';
import './chats.scss';

const Chats = ({ users, openChat, selectedChat, messages }) => {
	const chatsRender = users
		?.sort((a, b) => b.created - a.created)
		.map(
			(el) => (
				<Chat
					key={el.id}
					data={el}
					openChat={() => openChat(el.id)}
					change={selectedChat === el.id ? true : false}
					messages={messages}
				/>
			)
			/* el.message?.length > 0 ? (
			<Chat
				key={el.id}
				data={el}
				openChat={() => openChat(el.id)}
				change={selectedChat === el.id ? true : false}
			/>
		) : null */
		);

	return (
		<div className="chats-group">{chatsRender}</div>
		/* <Chat change={true}  /> */
	);
};

export default Chats;
