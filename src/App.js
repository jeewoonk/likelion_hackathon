import './App.css';
import React from "react";

// import { Route } from "react-router-dom";
// import { ConnectedRouter } from "connected-react-router";
// import { history } from "../redux/configureStore";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
 

import Header from "./components/Header";
import Main from "./pages/Main";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Category from "./pages/Category";
import Chat from './pages/Chat';

// import "semantic-ui-css/semantic.min.css";

function App() {
	return (
		// <h1>동네 친구들과 식재료 소분하기</h1>
	// <React.Fragment>
	// 	<Header></Header>
	// 	<ConnectedRouter history={history}>
	// 		<Route path="/" exact component={Main} />
	// 		{/* <Route path="/list" exact component={PostList} />
	// 		<Route path="/detail/:daangnProductId" exact component={PostDetail} />
	// 		<Route path="/login" exact component={Login} />
	// 		<Route path="/signup" exact component={Signup} /> */}
	// 	</ConnectedRouter>
	// </React.Fragment>
		
		<React.Fragment>
			<Header></Header>
			<Routes>
				<Route exact path="/" element={<Main />}
				/>
				<Route path="/login" element={<Login />}
				/>
				<Route path="/signup" element={<Signup />}
				/>
				<Route path="/category" element={<Category />}
				/>
				<Route path="/chat" element={<Chat />}
				/>
			</Routes>
		</React.Fragment>
	);
}

export default App;
