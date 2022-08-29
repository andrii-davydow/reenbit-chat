import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';

import Avatar from '../avatar/Avatar';
import './chat.scss';

TimeAgo.addLocale(en);

const Chat = ({ change, data, openChat }) => {
	const changeCls = change ? 'active-chat' : '';
	const { fullname, photo, online, created, message } = data;

	const timeAgo = new TimeAgo('en-US');

	const trimText = (text, length, end = '...') => {
		let index = text.indexOf(' ', length);
		if (index == -1) index = length;

		return text.slice(0, index) + end;
	};

	return (
		<div className={`user-chat ${changeCls}`} onClick={openChat}>
			<Avatar photo={photo} status={online} />

			<div className="user-chat-info">
				<h3 className="user-name">
					<span className="name-clip">{fullname}</span>
					<span className="user-unreadMsg">2</span>
				</h3>
				<p className="user-dateMsg">
					{created ? timeAgo.format(+created) : null}
				</p>
				<p className="user-lastMsg">{message ? trimText(message, 80) : null}</p>
			</div>
		</div>
	);
};

export default Chat;
