import Avatar from '../avatar/Avatar';
import './recipient.scss';
import { useEffect } from 'react';

const Recipient = ({ recipient, activeToggle }) => {
	const { fullname, photo, online } = recipient;

	return (
		<div className="recipient-block">
			<Avatar photo={photo} status={online} />
			<h3 className="recipient-name">{fullname}</h3>
			<button className="prev-chat" onClick={activeToggle()}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="86"
					height="86"
					fill="none"
					viewBox="0 0 86 86"
				>
					<g fill="#000">
						<path d="M34.336 42.999a1.68 1.68 0 00-1.675-1.675H30.15A1.68 1.68 0 0028.474 43a1.68 1.68 0 001.675 1.675h2.512a1.68 1.68 0 001.675-1.675zM68.331 29.347l11.975 11.975H40.195a1.68 1.68 0 00-1.675 1.675 1.68 1.68 0 001.675 1.674h40.11L68.332 56.646a1.653 1.653 0 00-.502 1.172c0 .42.167.838.502 1.173.67.67 1.675.67 2.345 0l14.822-14.822c.67-.67.67-1.675 0-2.345L70.676 27.002c-.67-.67-1.675-.67-2.345 0-.67.67-.67 1.675 0 2.345z"></path>
					</g>
				</svg>
			</button>
		</div>
	);
};

export default Recipient;
