import { useEffect, useState } from 'react';

import './chatSearch.scss';

const ChatSearch = ({ searchChat }) => {
	const [term, setTerm] = useState('');

	useEffect(() => {
		searchChat(term.toLowerCase().trim());
	}, [term]);
	return (
		<>
			<form className="search-form">
				<input
					className="search-inp"
					type="text"
					placeholder="Search or start new chat"
					onChange={(e) => setTerm(e.target.value)}
				/>
				<button className="search-btn">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						x="0"
						y="0"
						enableBackground="new 0 0 382 382"
						version="1.1"
						viewBox="0 0 382 382"
						xmlSpace="preserve"
					>
						<path d="M230 3C146 3 78 71 78 155c0 37.6 13.6 72 36.4 98.4l-112 112c-3.2 3.2-3.2 8 0 11.2C4 378.2 6 379 8 379s4-.8 5.6-2.4L125.2 265c27.2 26 64.4 42 104.8 42 84 0 152-68 152-152S314 3 230 3zm0 288c-74.8 0-136-61.2-136-136S155.2 19 230 19s136 61.2 136 136-61.2 136-136 136z"></path>
						<path d="M140 102.2c1.6 1.2 3.2 1.6 4.8 1.6 2.4 0 4.8-1.2 6.4-3.2l3.6-4.8c2.8-3.6 2-8.4-1.6-11.2-3.6-2.8-8.4-2-11.2 1.6l-3.6 4.8c-2.8 3.6-2 8.4 1.6 11.2zM165.2 225c-19.6-17.6-31.2-43.2-31.2-70 0-8.4 1.2-16.4 3.2-24.4 1.2-4.4-1.2-8.8-5.6-10-4.4-1.2-8.8 1.2-10 5.6-2.4 9.2-4 18.8-4 28.4 0 31.2 13.2 61.2 36.8 82.4 1.6 1.2 3.6 2 5.2 2 2 0 4.4-.8 6-2.8 2.8-3.2 2.8-8.4-.4-11.2z"></path>
					</svg>
				</button>
			</form>
		</>
	);
};

export default ChatSearch;
