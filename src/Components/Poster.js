import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
	width: 100%;
	font-size: 12px;
`;

const Image = styled.div`
	background-image: url(${(props) => props.bgUrl});
	height: 300px;
	background-size: cover;
	background-position: center center;
	border-radius: 5px;
	transition: 0.3s;
`;
const Rating = styled.span`
	position: absolute;
	bottom: 5px;
	right: 5px;
	opacity: 0;
	transition: 0.3s;
`;
const ImageContainer = styled.div`
	border-radius: 50%;
	overflow: hidden;
	margin-bottom: 5px;
	position: relative;
	transition: all 0.5s;
	transform: scale(0.8);
	&:hover {
		${Image} {
			opacity: 0.3;
		}
		${Rating} {
			opacity: 0.8;
		}
		border-radius: 0;
		transform: scale(1);
	}

	@media screen and (max-width: 1024px) {
		border-radius: 0;
	}
`;

const Title = styled.span`
	display: block;
	margin-bottom: 3px;
`;

const Year = styled.span`
	font-size: 10px;
	color: rgba(255, 255, 255, 0.7);
`;

const Poster = ({ id, imageUrl, title, rating, year, isMovie = false }) => {
	return (
		<Link to={isMovie ? `/movie/${id}` : `/show/${id}`}>
			<Container>
				<ImageContainer>
					<Image
						bgUrl={
							imageUrl
								? `https://image.tmdb.org/t/p/w300${imageUrl}`
								: require("../assets/noPosterSmall.png")
						}
					/>
					<Rating>
						<span role="img" aria-label="rating">
							⭐️
						</span>
						{""}
						{rating}/10
					</Rating>
				</ImageContainer>
				<Title>
					{title.length > 18 ? `${title.substring(0, 15)}...` : title}
				</Title>
				<Year>{year}</Year>
			</Container>
		</Link>
	);
};

Poster.propTypes = {
	id: PropTypes.number.isRequired,
	imageUrl: PropTypes.string,
	title: PropTypes.string.isRequired,
	rating: PropTypes.number,
	year: PropTypes.string,
	isMovie: PropTypes.bool,
};

export default Poster;
