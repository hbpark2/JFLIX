import React from "react";
import styled, { keyframes } from "styled-components";

const LoadAni = keyframes`
	0%{
		transform: scale(1);
		border-radius: 50%;
		background-color:#fff;
	}

	50%{
		transform: scale(0.3);
		border-radius: 50%;

	}
	70%{
		transform: scale(0.8);
		border-radius: 50%;

	}
	85%{
		transform: scale(0.4);
		border-radius: 50%;
	}
	100%{
		transform: scale(1);
		width:100%;
		border-radius:0;
		background-color:#F29F05;
	}

`;

const Container = styled.div`
	width: 100vw;
	heught: 100vh;
	display: flex;
	justify-content: center;
	font-size: 28px;
	margin-top: 20px;
	span {
		display: block;
	}
	div {
		position: absolute;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		background-color: #f29f05;
		transform-orgin: center;
		animation-name: ${LoadAni};
		animation-duration: 2s;
		animation-timing-function: cubic-bezier(0.32, 0.24, 0.15, 1);
	}
`;

export default () => {
	return (
		<Container>
			<div></div>
		</Container>
	);
};
