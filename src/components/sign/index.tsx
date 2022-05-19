import React from 'react';
import styled from 'styled-components';

const SignInput = styled.input`
	width: 280px;
	height: 60px;
	background-color: #404040;
	color: #FFFFFF;
`;

const signScreen = (): JSX.Element => {
	return (
		<div>
			<SignInput />
			<SignInput />
		</div>
	);
}

export default signScreen;
