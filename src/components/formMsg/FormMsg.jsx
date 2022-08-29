import { useEffect, useState } from 'react';
import { sendMsg, selectRandomMsg, selectUsers } from '../../server/db';
import './formMsg.scss';

const FormMsg = ({ currentUserID, recipientID, getNewMessage }) => {
	const [msg, setMsg] = useState([]);

	const onSubmit = (e) => {
		e.preventDefault();
		const TIME_OUT = 10000;

		let dataMsg = {
			id: Date.now(),
			message: msg,
			created: Date.now(),
			author: currentUserID,
			receiver: recipientID,
		};

		if (msg.length > 0) {
			sendMsg(dataMsg);
			getNewMessage(dataMsg);

			selectRandomMsg().then((res) => {
				if (res.status == 200 && res.data.length > 0) {
					const replyMsg = {
						id: Date.now() + TIME_OUT,
						message: res.data,
						created: Date.now() + TIME_OUT,
						author: recipientID,
						receiver: currentUserID,
					};
					setTimeout(() => {
						getNewMessage(replyMsg);
						sendMsg(replyMsg);
					}, TIME_OUT);
				}
			});

			setMsg('');
		}
	};

	useEffect(() => {
		setMsg('');
	}, [recipientID]);

	return (
		<form className="message-form" onSubmit={onSubmit}>
			<input
				className="msg-input"
				type="text"
				placeholder="Type your message..."
				value={msg}
				onChange={(e) => setMsg(e.target.value)}
			/>
			<button className="msg-btn" type="submit">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					x="0"
					y="0"
					enableBackground="new 0 0 385.707 385.707"
					version="1.1"
					viewBox="0 0 385.707 385.707"
					xmlSpace="preserve"
				>
					<path d="M382.83 17.991c-2.4-2-5.6-2.4-8.4-1.2l-365.2 160c-6 2.4-9.6 8.4-9.2 15.2.4 6.8 4.4 12.4 10.8 14.8l106.8 35.2v96c0 8.8 5.6 16.4 14 18.8 8.4 2.8 17.6-.4 22.8-7.6l44.8-64.8 94.8 81.6c2.8 2.4 6.4 3.6 10.4 3.6 2 0 3.6-.4 5.2-.8 5.6-2 9.6-6.4 10.4-12l65.6-330.8c.4-2.8-.8-6-2.8-8zm-191.6 249.6l-50 72.4c-1.6 2.4-3.6 2-4.8 1.6-.8 0-2.8-1.2-2.8-3.6v-101.6c0-3.6-2-6.4-5.6-7.6l-112.4-37.6 324.8-142-160 131.6c-3.6 2.8-4 8-1.2 11.2 1.6 2 4 2.8 6 2.8 1.6 0 3.6-.4 5.2-2l138.8-114-138 188.8zm113.2 86l-96-82.4 153.6-209.6-57.6 292z"></path>
					<path d="M158.83 198.391l-12.8 10.4c-3.6 2.8-4 8-1.2 11.2 1.6 2 4 2.8 6.4 2.8 1.6 0 3.6-.4 5.2-1.6l12.8-10.4c3.6-2.8 4-8 1.2-11.2-2.8-3.2-8-3.6-11.6-1.2z"></path>
				</svg>
			</button>
		</form>
	);
};

export default FormMsg;
