import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { selectUsers, selectMessages } from '../../server/db';

import { auth } from '../../server/auth';

import { useAuthState } from 'react-firebase-hooks/auth';

import Loading from '../loading/Loading';
import Recipient from '../recipient/Recipient';
import Messages from '../messages/Messages';
import FormMsg from '../formMsg/FormMsg';
import Chats from '../chats/Chats';
import UserInfo from '../userInfo/UserInfo';
import ChatSearch from '../chatSearch/ChatSearch';

import './chatApp.scss';
import Empty from '../loading/Empty';

const ChatApp = () => {
	const [user, loading] = useAuthState(auth);
	const navigate = useNavigate();
	useEffect(() => {
		if (loading) {
			<Loading />;
		}
		if (!user) return navigate('/');
	}, [user, loading]);

	const [currentUser, setCurrentUser] = useState({});
	const [users, setUsers] = useState({});
	const [status, setStatus] = useState();
	const [lastMsg, setLastMsg] = useState({});

	const getNewMessage = (data) => {
		setLastMsg(data);
	};

	useEffect(() => {
		if (!loading) {
			selectUsers().then((res) => {
				const { authedUser, allUsers, status } = res;
				setCurrentUser(authedUser);
				setUsers(allUsers);

				setStatus(status);
			});
		}
	}, [lastMsg]);

	const [searchChats, setSearchChats] = useState([]);
	const searchChat = (term) => {
		term.length > 2
			? setSearchChats(
					users?.filter(
						(el) =>
							el.email.includes(term) ||
							el.fullname.toLowerCase().includes(term)
					)
			  )
			: setSearchChats([]);
	};

	const [selectedChat, setSelectedChat] = useState('');
	const [recipient, setRecipient] = useState('');
	const openChat = (chatId) => {
		setSelectedChat(chatId);

		const getRecipient = users.filter((el) => el.id === chatId)[0];
		setRecipient(getRecipient);
	};

	const [messages, setMessages] = useState([]);
	const [activeMobile, setActiveMobile] = useState('false');
	useEffect(() => {
		if (selectedChat) {
			selectMessages(selectedChat, currentUser.id).then((res) => {
				const { data } = res;
				setMessages(data);
			});
			setActiveMobile('active-chat');
		}
	}, [selectedChat, lastMsg]);

	const activeToggle = () => {
		setActiveMobile(!activeMobile);
	};

	const renderMsg = selectedChat.length ? (
		<>
			<Recipient recipient={recipient} activeToggle={() => activeToggle} />
			<Messages
				messages={messages}
				currentUser={currentUser}
				recipient={recipient}
				lastMsg={lastMsg}
			/>
			<FormMsg
				currentUserID={currentUser.id}
				recipientID={selectedChat}
				getNewMessage={getNewMessage}
			/>
		</>
	) : (
		<Empty />
	);

	return status === 200 && !loading ? (
		<>
			<div className="user-chats">
				<div className="main-group">
					<UserInfo currentUser={currentUser} />
					<ChatSearch searchChat={searchChat} />
				</div>
				<div className="main-chats">
					<div className="chats-title">
						<h2>Chats Reenbit </h2>
					</div>
					<Chats
						users={searchChats?.length > 0 ? searchChats : users}
						openChat={openChat}
						selectedChat={selectedChat}
					/>
				</div>
			</div>

			<div className={`user-communication ${activeMobile}`}>{renderMsg}</div>
		</>
	) : (
		<Loading />
	);
};

export default ChatApp;
