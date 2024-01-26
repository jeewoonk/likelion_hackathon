import React from 'react';
import './Category.css';
import { useNavigate, useParams } from 'react-router-dom';

import { FaCarrot } from 'react-icons/fa';
import { BiSolidBaguette } from "react-icons/bi";
import { FaFlask } from "react-icons/fa";

export default function Category() {
	const navigate = useNavigate();

	const navigatefresh = () => {
		navigate("/category/fresh", {state: { categoryID: 'fresh' }});
	}
	const navigateprocessed = () => {
		navigate("/category/processed", {state: { categoryID: 'processed' }});
	}

	const navigateessential = () => {
		navigate("/category/essential", {state: { categoryID: 'essential' }});
	}


	return (
		<div>
			<div className='category'>
				<h1>카테고리 선택하기</h1>
				<p>이웃과 새로운 음식 취향을 공유해보세요!</p>
				<p>나누고 싶은 식재료 카테고리가 무엇인가요?</p>
			</div>
			<div className='whole-wrapper'>
				<div className="item-wrapper">
					<p className="item-tag">FRESH</p>
					<FaCarrot className='icon' />
					<div className="item-name">신선 식품</div>
					<p className="item-explanation">신선 식품에 대한 설명을 씁시다. 신선 식품에 대한 설명을 씁시다. 신선 식품에 대한 설명을 씁시다.</p>
					<button onClick={navigatefresh}>시작하기</button>
				</div>
				<div className="item-wrapper">
					<div className="item-tag">PROCESSED</div>
					<BiSolidBaguette className='icon' />
					<div className="item-name">가공 식품</div>
					<p className="item-explanation">가공 식품에 대한 설명을 씁시다. 가공 식품에 대한 설명을 씁시다. 가공 식품에 대한 설명을 씁시다.</p>
					<button onClick={navigateprocessed}>시작하기</button>
				</div>
				<div className="item-wrapper">
					<div className="item-tag">ESSENTIALS</div>
					<FaFlask className='icon' />
					<div className="item-name">가정 용품</div>
					<p className="item-explanation">가정 용품에 대한 설명을 씁시다. 가정 용품에 대한 설명을 씁시다. 가정 용품에 대한 설명을 씁시다.</p>
					<button onClick={navigateessential}>시작하기</button>
				</div>
			</div>
		</div>
	);
};