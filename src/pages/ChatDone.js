import React, { useState } from "react";
import './Chat.css'
import { msgList } from './data';
import { FaSearch } from "react-icons/fa";
import person1 from '../assets/person1.PNG';
import person2 from '../assets/person2.PNG';
import person3 from '../assets/person3.PNG';
import person4 from '../assets/person4.PNG';
import person5 from '../assets/person5.PNG';

export default function Chat() {
	let [msgs, msgFunc] = useState(msgList);

	return (
		<div>
			<div className="whole">
				<div className="chat-list">
					<FaSearch className="firsticon"/><input type="text" placeholder="Search"></input>
					<div className="chat-detail">
						{
							msgs.map(function (msg, i) {
								return (
									<div className="conversation">
										<div className="personPic">
											<div className="pic p1" />
										</div>
										<div className="conDetail">
											<p className="nickname">{msg.nickname}</p>
											<p className="date">{msg.date}</p>
											<div className="msg">{msg.msg}</div>
										</div>
									</div>
								)
							})
						}
					</div>
				</div>
				<div className="v-line"></div>
				<div className="real-chat">
					<div className="buyer">
						<div className="pic p1" />
						<div><h1>얼바인 공주</h1></div>
						<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/ico_star.png" className="star"></img>
					</div>

					<ul id="chat">
						<li class="you">
							<div class="entete">
								<span class="status green"></span>
								<h2>얼바인 공주</h2>
								<h3>10:12AM, Today</h3>
							</div>
							<div class="message">
								안녕하세요!
							</div>
						</li>
						<li class="you">
							<div class="entete">
								<span class="status green"></span>
								<h2>얼바인 공주</h2>
								<h3>10:12AM, Today</h3>
							</div>
							<div class="message">
								감자 게시물 보고 연락드립니다. 5개 정도 구매하고 싶은데요.
							</div>
						</li>
						<li class="me">
							<div class="entete">
								<h3>10:12AM, Today</h3>
								<h2>Me</h2>
								<span class="status blue"></span>
							</div>
							<div class="message">
								네 가능합니다. 언제 가져가실 수 있을까요?
							</div>
						</li>
						<li class="me">
							<div class="entete">
								<h3>10:12AM, Today</h3>
								<h2>Me</h2>
								<span class="status blue"></span>
							</div>
							<div class="message">
								그리고 Verano community center 앞에서 드렸으면 합니다.
							</div>
						</li>
						<li class="you">
							<div class="entete">
								<span class="status green"></span>
								<h2>얼바인 공주</h2>
								<h3>10:12AM, Today</h3>
							</div>
							<div class="message">
								1월 31일이 가능할까요? 말씀하신 장소에서 가능합니다!
							</div>
						</li>
						
					</ul>
					<div className="typing">
						<textarea placeholder="메세지를 입력하세요"></textarea>
						<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/ico_picture.png" alt=""/>
						<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/ico_file.png" alt=""/>
						<a href="#">Send</a>
					</div>
				</div>
			</div>
		</div>
	)
}