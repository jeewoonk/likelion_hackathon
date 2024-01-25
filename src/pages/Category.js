import React from 'react';
import './Category.css';

export default function Category() {
	return (
		<div>
			<div className='category'>
				<h1>카테고리 선택하기</h1>
			</div>
			<div className='whole-wrapper'>
				<div className="item-wrapper img fresh">
					<h1 className="item-name"><a href='/freshfood'>신선 식품</a></h1>
					<div className='img-cover'></div>
				</div>
				<div className="item-wrapper img processed">
					<h1 className="item-name"><a href='/processedfood'>가공 식품</a></h1>
					<div className='img-cover'></div>
				</div>
				<div className="item-wrapper img household">
					<h1 className="item-name"><a href='/household'>가정 용품</a></h1>
					<div className='img-cover'></div>
				</div>
			</div>
		</div>
	);
};