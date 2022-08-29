import Avatar from '../avatar/Avatar';
import { logout } from '../../server/auth';
import './userInfo.scss';

const UserInfo = ({ currentUser }) => {
	const { fullname, photo, online } = currentUser;
	return (
		<>
			<Avatar photo={photo} status={online} />
			<h3 className="profile-name">{fullname}</h3>
			<button className="profile-btnExit" onClick={logout}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="86"
					height="86"
					fill="none"
					viewBox="0 0 86 86"
				>
					<g fill="#000" clipPath="url(#clip0_2817_7745)">
						<path d="M56.945 69.795V56.397a1.68 1.68 0 00-1.675-1.675 1.68 1.68 0 00-1.674 1.675v13.398a5.04 5.04 0 01-5.025 5.024H8.377a5.04 5.04 0 01-5.025-5.024V16.202a5.04 5.04 0 015.025-5.024H48.57a5.04 5.04 0 015.025 5.024v15.073a1.68 1.68 0 001.675 1.675 1.68 1.68 0 001.674-1.675V16.202c0-4.606-3.768-8.374-8.374-8.374H8.377c-4.606 0-8.374 3.768-8.374 8.374v53.593c0 4.606 3.768 8.374 8.374 8.374H48.57c4.606 0 8.374-3.768 8.374-8.374z"></path>
						<path d="M34.336 42.999a1.68 1.68 0 00-1.675-1.675H30.15A1.68 1.68 0 0028.474 43a1.68 1.68 0 001.675 1.675h2.512a1.68 1.68 0 001.675-1.675zM68.331 29.347l11.975 11.975H40.195a1.68 1.68 0 00-1.675 1.675 1.68 1.68 0 001.675 1.674h40.11L68.332 56.646a1.653 1.653 0 00-.502 1.172c0 .42.167.838.502 1.173.67.67 1.675.67 2.345 0l14.822-14.822c.67-.67.67-1.675 0-2.345L70.676 27.002c-.67-.67-1.675-.67-2.345 0-.67.67-.67 1.675 0 2.345z"></path>
					</g>
					<defs>
						<clipPath id="clip0_2817_7745">
							<path
								fill="#fff"
								d="M0 0H86V86H0z"
								transform="rotate(90 43 43)"
							></path>
						</clipPath>
					</defs>
				</svg>
			</button>
		</>
	);
};

export default UserInfo;
