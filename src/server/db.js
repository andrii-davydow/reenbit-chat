import axios from 'axios';
axios.defaults.headers = {
	'Cache-Control': 'no-cache',
	Pragma: 'no-cache',
	Expires: '0',
};
const selectUsers = async (CURRENT_USER_ID = 1) => {
	try {
		const response = await axios.get(
			`https://zelios.studio/api-chat/selectUsers.php?timestamp=${new Date().getTime()}`
		);
		const data = response.data;

		return {
			authedUser: data.filter((el) => +el.id === CURRENT_USER_ID)[0],
			allUsers: data.filter((el) => +el.id !== CURRENT_USER_ID),
			status: response.status,
		};
	} catch (error) {
		console.error(error);
	}
};

const selectMessages = async (chatID, userID) => {
	try {
		const response = await axios.get(
			`https://zelios.studio/api-chat/selectMessages.php?usersIds=${chatID},${userID}`
		);
		return response;
	} catch (error) {
		console.error(error);
	}
};

const selectRandomMsg = async () => {
	try {
		const response = await axios.get(`https://api.chucknorris.io/jokes/random`);
		return {
			status: response.status,
			data: response.data.value,
		};
	} catch (error) {
		console.error(error);
	}
};

const sendMsg = async (msg) => {
	try {
		axios.post('https://zelios.studio/api-chat/insertMessage.php', msg);
	} catch (error) {
		console.error(error);
	}
};

export { selectUsers, selectMessages, sendMsg, selectRandomMsg };
