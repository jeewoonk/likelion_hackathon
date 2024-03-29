import React from "react";
import './Login.css'
import { FaUser } from 'react-icons/fa';
import { FaLock } from 'react-icons/fa';
import Header from "./Header";
import { useNavigate } from 'react-router-dom';

export default function Login() {
	const navigate = useNavigate();

	return (
		<React.Fragment>
			<Header></Header>
			<div className="wrapper">
				<form action="">
					<h1>로그인</h1>
					<div className="input-box">
						<input type="email" placeholder="사용자 이메일" required></input>
						<FaUser className="firsticon"/>
					</div>
					<div className="input-box">
						<input type="password" placeholder="사용자 비밀번호" required></input>
						<FaLock className="firsticon"/>
					</div>

					<div className="remember-forgot">
						<label><input type="checkbox" />로그인 상태 유지</label>
						<a href="#">비밀번호를 잊어버리셨나요?</a>
					</div>

					<button type="submit" onClick={() => navigate("/main")}>로그인</button>

					<div className="register-link">
						<p>계정이 없으신가요? <a href="/signup">회원가입</a></p>
					</div>
				</form>
			</div>

    	</React.Fragment>
	);
};
