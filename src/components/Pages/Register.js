import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { FaLock } from 'react-icons/fa';
import { VscAccount } from 'react-icons/vsc'
import { useDispatch } from 'react-redux';
import { loginUser } from '../LoginUser';

export default function Register() {
	// const dispatch = useDispatch();

    // const [Email, setEmail] = useState("");
    // const [Password, setPassword] = useState("");

    // const onEmailHandler = (event) => {
    //     setEmail(event.currentTarget.value);
    // }
    // const onPasswordHandler = (event) => {
    //     setPassword(event.currentTarget.value);
    // }
    // const onSubmitHandler = (event) => {
    //     // 버튼만 누르면 리로드 되는것을 막아줌
    //     event.preventDefault();

    //     console.log('Email', Email);
    //     console.log('Password', Password);
        
    //     let body = {
    //         email: Email,
    //         password: Password,
    //     }

    //     dispatch(loginUser(body));
    // }
	
	return (
		<div className='wrapper'>
			<form action=''>
				<h1>회원가입</h1>
				<div className="input-box">
					<FaUser className="icon"/>
					<input type="email" placeholder="사용자 이메일" required></input>
				</div>
				<div className="input-box">
					<VscAccount className="icon"/>
					<input type="text" placeholder="사용자 아이디" required></input>
				</div>
				<div className="input-box">
					<FaLock className="icon"/>
					<input type="password" placeholder="사용자 비밀번호" required></input>
				</div>
				<div className="input-box">
					<FaLock className="icon"/>
					<input type="password" placeholder="비밀번호를 다시 한 번 입력해주세요" required></input>
				</div>
				<button type="submit">회원가입</button>
			</form>
		</div>
	);
}