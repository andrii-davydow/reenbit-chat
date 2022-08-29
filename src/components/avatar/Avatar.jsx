import './avatar.scss';

const Avatar = ({ own, photo, status }) => {
	const defaultAvatar =
		'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZmFjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60';
	const setAvatar = photo !== undefined && photo ? photo : defaultAvatar;
	const setStatus = status === '1' ? 'online' : 'offline';
	return (
		<div className="user-img">
			<img src={setAvatar} alt="user img" className="user-avatar" />
			{!own ? <span className={`user-status ${setStatus}`}></span> : null}
		</div>
	);
};

export default Avatar;
