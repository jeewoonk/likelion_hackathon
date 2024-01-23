import React from "react";
import './Login.css'
import { FaUser } from 'react-icons/fa';
import { FaLock } from 'react-icons/fa';

export default function Login() {
	return (
		<div className="wrapper">
			<form action="">
				<h1>로그인</h1>
				<div className="input-box">
					<input type="email" placeholder="사용자 이메일" required></input>
					<FaUser className="icon"/>
				</div>
				<div className="input-box">
					<input type="password" placeholder="사용자 비밀번호" required></input>
					<FaLock className="icon"/>
				</div>

				<div className="remember-forgot">
					<label><input type="checkbox" />Remember me</label>
					<a href="#">비밀번호를 잊어버리셨나요?</a>
				</div>

				<button type="submit">로그인</button>

				<div className="register-link">
					<p>계정이 없으신가요? <a href="/signup">회원가입</a></p>
				</div>
			</form>
		</div>
	);
};
