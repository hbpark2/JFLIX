import React from "react";
import Loader from "react-loader-spinner";
import styled from "styled-components";

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 28px;
	margin-top: 20px;
`;

export default () => {
	return (
		<Container>
			<Loader
				type="ThreeDots"
				color="#f29f05"
				height={100}
				width={100}
				timeout={3000} //3 secs
			/>{" "}
		</Container>
	);
};
