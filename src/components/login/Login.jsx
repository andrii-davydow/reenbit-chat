import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
	signInWithGoogle,
	logInWithEmailAndPassword,
	auth,
} from '../../server/auth';
import { useAuthState } from 'react-firebase-hooks/auth';

import Loading from '../loading/Loading';

import './login.scss';

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [user, loading] = useAuthState(auth);
	const navigate = useNavigate();

	useEffect(() => {
		if (loading) {
			<Loading />;
		}
		if (user) navigate('/chat');
	}, [user, loading]);
	return (
		<div className="auth-content">
			<div className="auth-form">
				<input
					type="text"
					className="auth-inp"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					placeholder="E-mail Address"
				/>
				<input
					type="password"
					className="auth-inp"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					placeholder="Password"
				/>
				<button
					className="auth-btn"
					onClick={() => logInWithEmailAndPassword(email, password)}
				>
					Login
				</button>

				<button className="auth-btn btn-google" onClick={signInWithGoogle}>
					Login with Google
				</button>
				<div className="link-block">
					<Link to="/reset" className="other-link">
						Forgot Password
					</Link>
					<Link to="/register" className="other-link">
						Register
					</Link>{' '}
				</div>
			</div>
		</div>
	);
};
export default Login;
