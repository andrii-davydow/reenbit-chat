import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';

import Avatar from '../avatar/Avatar';
import './message.scss';
TimeAgo.addDefaultLocale(en);
const Message = ({ own, data, currentUser, recipient }) => {
	const ownMsg = own ? 'own-msg' : '';
	const setAvatar = own ? currentUser.photo : recipient.photo;

	const timeAgo = new TimeAgo('en-US');
	const { message, created } = data;
	return (
		<div className={`message ${ownMsg}`}>
			<Avatar own={own} photo={setAvatar} status={recipient.online} />
			<div className="msg-info">
				<p className="msg-text">
					{message}
					<span className="msg-date">{timeAgo.format(+created)}</span>
				</p>
			</div>
		</div>
	);
};

export default Message;
