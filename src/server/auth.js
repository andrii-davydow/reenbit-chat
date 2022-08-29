import { initializeApp } from 'firebase/app';
import {
	GoogleAuthProvider,
	getAuth,
	signInWithPopup,
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
	sendPasswordResetEmail,
	signOut,
} from 'firebase/auth';

import axios from 'axios';
// import { selectUsers } from './db';

const firebaseConfig = {
	apiKey: 'AIzaSyA3KzylmXgsCtHH7ed7WIztQMTQyj5_-3s',
	authDomain: 'react-chat-d80a7.firebaseapp.com',
	projectId: 'react-chat-d80a7',
	storageBucket: 'react-chat-d80a7.appspot.com',
	messagingSenderId: '337695346366',
	appId: '1:337695346366:web:3c98f74285bb09813cd8ef',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

const checkUserDB = async (user) => {
	const response = await axios.get(
		`https://zelios.studio/api-chat/selectUsers.php?timestamp=${new Date().getTime()}`
	);
	const data = response.data;
	return data.filter((el) => el.email === user.email);
};

const signInWithGoogle = async () => {
	try {
		const res = await signInWithPopup(auth, googleProvider);
		const user = res.user;
		const checkUser = await checkUserDB(user);

		if (checkUser.length === 0) {
			axios.post('https://zelios.studio/api-chat/insertUser.php', {
				id: user.uid,
				email: user.email,
				fullname: user.displayName,
				online: 1,
				photo: user.photoURL,
				provider: 'google_btn',
			});
			console.log('користувач залогінився за допомогою кнопки');
		} else {
			console.log('такий користувач вже зареєстрований, переводимо в чати');
		}
	} catch (err) {
		alert(err.message);
	}
};

const logInWithEmailAndPassword = async (email, password) => {
	try {
		const res = await signInWithEmailAndPassword(auth, email, password);
		const user = res.user;
		const checkUser = await checkUserDB(user);

		if (checkUser.length > 0) {
			console.log('користувач авторизувався');
		}
	} catch (err) {
		alert(err.message);
	}
};

const registerWithEmailAndPassword = async (name, email, password) => {
	try {
		const res = await createUserWithEmailAndPassword(auth, email, password);
		const user = res.user;
		const checkUser = await checkUserDB(user);

		if (checkUser.length === 0) {
			const getPhoto = await axios.get(
				`https://api.thecatapi.com/v1/images/search?ref=morioh.com&utm_source=morioh.com`
			);
			const photoURL = getPhoto.data[0].url;

			await axios.post('https://zelios.studio/api-chat/insertUser.php', {
				id: user.uid,
				email: email,
				fullname: name,
				online: 1,
				photo: photoURL,
				provider: 'google_form',
			});

			console.log('користувач залогінився за допомогою форми');
		} else {
			console.log('такий користувач вже зареєстрований');
		}
	} catch (err) {
		alert(err.message);
	}
};

const sendPasswordReset = async (email) => {
	try {
		await sendPasswordResetEmail(auth, email);
		alert('Password reset link sent!');
		console.log('користувач надіслав запит на відновлення паролю');
	} catch (err) {
		alert(err.message);
	}
};

const logout = async (id) => {
	signOut(auth);
	console.log('користувач вийшов');
	console.log(auth);
	/* const docRef = doc(db, 'users', `${id}`);
	const data = {
		status: 'offline',
	}; */
	/* await setDoc(docRef, data, { merge: true })
		.then(() => {
			signOut(auth);
		})
		.catch((error) => {
			console.log(error);
		}); */
};

export {
	signInWithGoogle,
	logInWithEmailAndPassword,
	registerWithEmailAndPassword,
	sendPasswordReset,
	logout,
	auth,
};
