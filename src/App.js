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
import ItemList from "./pages/ItemList";

// import "semantic-ui-css/semantic.min.css";

function App() {
	return (
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
				<Route path="/itemlist" element={<ItemList />}
				/>
			</Routes>
		</React.Fragment>
	);
}

export default App;
