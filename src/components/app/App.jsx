import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Login from '../login/Login';
import Register from '../register/Register';
import Reset from '../reset/Reset';
import ChatApp from '../chatApp/ChatApp';

const App = () => {
	return (
		<>
			<Router>
				<Routes>
					<Route exact path="/" element={<Login />} />
					<Route exact path="/register" element={<Register />} />
					<Route exact path="/reset" element={<Reset />} />
					<Route exact path="/chat" element={<ChatApp />} />
				</Routes>
			</Router>
		</>
	);
};

export default App;
