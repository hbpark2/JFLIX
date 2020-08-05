import React from "react";
import styled from "styled-components";

const Container = styled.div`
	width: 100vw;
	heught: 100vh;
	display: flex;
	justify-content: center;
	font-size: 28px;
	margin-top: 20px;
`;

export default () => (
	<Container>
		<span role="img" aria-label="Loading">
			😃
		</span>
	</Container>
);
