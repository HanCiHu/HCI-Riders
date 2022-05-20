import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
	width: 100%;
	height: 100%;

	display: flex;
	justify-content: center;
	align-items: center;
`;

const SignWrapper = styled.div`
	display: flex;
	flex-direction: column;

	transform: translateY(-100px);
`;

const SignInput = styled.input`
	width: 280px;
	height: 60px;
	background-color: #404040;
	color: #FFFFFF;
	margin: 10px;

	font-size: 20px;
	padding-left: 15px;

	outline: none;
	border: none;
	border-radius: 15px;

	::placeholder{
		color: #FFFFFF;
	}
`;

const SignBtn = styled.button`
	width: 140px;
	height: 50px;

	border-radius: 15px;
	border: none;

	align-self: center;
	margin-top: 15px;
`;

interface IUser {
	id: string,
	pw: string,
}

const users = [
	{id: 'testuser', pw: '1234'},
	{id: 'kinm1596@daum.net', pw: 'test123'},
	{id: 'hyunjin', pw: 'hyunjin123'},
	{id: '123123', pw: '456789'},
	{id: 'helloWorld!', pw: 'world!hello!'},
	{id: 'test', pw: 'test'},
];

const SignScreen = (): JSX.Element => {
	const navigate = useNavigate();
	const idInputRef = useRef<HTMLInputElement>(null);
	const pwInputRef = useRef<HTMLInputElement>(null);

	const signInHandler = (): void => {
		const loginFlag = users.some((user: IUser) => user.id == idInputRef.current?.value && user.pw == pwInputRef.current?.value);

		if (!loginFlag) {
			alert('아이디 또는 비밀번호가 틀립니다.');
			return;
		}
		else navigate('/course');
	}

	return (
		<Container>
			<SignWrapper>
				<SignInput ref={idInputRef} placeholder='ID를 입력해주세요.' />
				<SignInput ref={pwInputRef} placeholder='비밀번호를 입력해주세요.' />
				<SignBtn onClick={signInHandler}>Login</SignBtn>
			</SignWrapper>
		</Container>
	);
}

export default SignScreen;
