import './App.css';
import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
 

// import Header from "./pages/Header";
import Main from "./pages/Main";
import Main2 from "./pages/Main2";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Category from "./pages/Category";
import ItemList from "./pages/ItemList";
import ItemDetail from "./pages/ItemDetail";
import Chat from './pages/Chat';

function App() {
	return (
		<React.Fragment>
			{/* <Header></Header> */}
			<Routes>
				<Route exact path="/" element={<Main />}
				/>
				<Route exact path="/main" element={<Main2 />}
				/>
				<Route path="/login" element={<Login />}
				/>
				<Route path="/signup" element={<Signup />}
				/>
				<Route path="/category" element={<Category />}
				/>
				<Route path="/category/fresh" element={<ItemList />}
				/>
				<Route path="/category/processed" element={<ItemList />}
				/>
				<Route path="/category/essential" element={<ItemList />}
				/>
				<Route path="/item/:itemID" element={<ItemDetail />}
				/>
				<Route path="/chat" element={<Chat />}
				/>
			</Routes>
			
		</React.Fragment>
	);
}

export default App;
