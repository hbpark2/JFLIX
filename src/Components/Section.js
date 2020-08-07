import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
	:not(:last-child) {
		margin-bottom: 50px;
	}
`;

const Title = styled.span`
	font-size: 14px;
	font-weight: 600;
`;

const Grid = styled.div`
	margin: 0 auto;
	margin-top: 25px;
	display: grid;
	grid-template-columns: repeat(auto-fill, 300px);
	grid-gap: 25px;
	justify-content: center;
	@media screen and (max-width: 640px) {
		grid-template-columns: repeat(1, 80%);
	}
`;

const Section = ({ title, children }) => {
	return (
		<>
			<Container>
				<Title>{title}</Title>
				<Grid>{children}</Grid>
			</Container>
		</>
	);
};

Section.propTypes = {
	title: PropTypes.string.isRequired,
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
	]),
};

export default Section;
