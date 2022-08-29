import React, { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { sendPasswordReset } from '../../server/auth';
import '../login/Login';
const Reset = () => {
	const [email, setEmail] = useState('');

	const navigate = useNavigate();
	/* useEffect(() => {
		if (loading) return;
		if (user) navigate('/chat');
	}, [user, loading]); */
	return (
		<div className="auth-content reset-content">
			<div className="auth-form">
				<input
					type="text"
					className="auth-inp"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					placeholder="E-mail Address"
				/>
				<button className="auth-btn" onClick={() => sendPasswordReset(email)}>
					Send password reset email
				</button>
				<div className="link-block">
					<Link to="/register" className="other-link">
						Register
					</Link>

					<Link to="/" className="other-link">
						Login
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Reset;
