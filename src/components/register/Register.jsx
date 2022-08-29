import React, { useEffect, useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';

import {
	signInWithGoogle,
	registerWithEmailAndPassword,
	auth,
} from '../../server/auth';

import { useAuthState } from 'react-firebase-hooks/auth';

import Loading from '../loading/Loading';
import '../login/Login';
const Register = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [name, setName] = useState('');
	const [user, loading] = useAuthState(auth);
	const navigate = useNavigate();

	const register = () => {
		if (!name) alert('Please enter name');
		registerWithEmailAndPassword(name, email, password);
	};

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
					value={name}
					onChange={(e) => setName(e.target.value)}
					placeholder="Full Name"
				/>
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
				<button className="auth-btn" onClick={register}>
					Register
				</button>
				<button className="auth-btn btn-google" onClick={signInWithGoogle}>
					Register with Google
				</button>
				<div className="link-block">
					<Link to="/" className="other-link">
						Already have an account? Login now.
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Register;
