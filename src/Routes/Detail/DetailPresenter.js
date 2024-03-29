import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import Loader from 'Components/Loader'

const Container = styled.div`
  height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  padding: 50px;
`

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${props => props.bgImage});
  background-position: center center;
  background-size: cover;
  filter: blur(3px);
  opacity: 0.5;
  z-index: 0;
`

const Content = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 1;
  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`

const Cover = styled.div`
  width: 30%;
  height: 100%;
  background-image: url(${props => props.bgImage});
  background-position: center center;
  background-size: cover;
  border-radius: 5px;
  transition: all 0.5s;

  @media screen and (max-width: 1024px) {
    width: 100%;
    margin-bottom: 20px;
  }
`

const Data = styled.div`
  width: 70%;
  margin-left: 10px;
  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`

const Title = styled.h3`
  font-size: 32px;
  margin-bottom: 10px;
`

const ItemContainer = styled.div`
  margin: 20px 0;
`

const Item = styled.span``

const Divider = styled.span`
  margin: 0 10px;
`

const Overview = styled.p`
  font-size: 16px;
  opacity: 0.7;
  line-height: 1.5em;
  width: 50%;
  @media screen and (max-width: 1024px) {
    font-size: 12px;
  }
`

const Trailer = styled.div`
  width: 100%;
`

const DetailPresenter = ({result, loading, error}) =>
  loading ? (
    <>
      <Helmet>
        <title>Loading | JFLIX</title>
      </Helmet>
      <Loader />
    </>
  ) : (
    <Container>
      <Helmet>
        <title>{result.original_title ? result.original_title : result.original_name} | JFLIX</title>
      </Helmet>
      <Backdrop bgImage={`https://image.tmdb.org/t/p/original${result.backdrop_path}`} />
      <Content>
        <Cover
          bgImage={result.poster_path ? `https://image.tmdb.org/t/p/original${result.poster_path}` : require('../../assets/noPosterSmall.png')}
        />
        <Data>
          <Title>{result.original_title ? result.original_title : result.original_name}</Title>
          <ItemContainer>
            <Item>{result.release_date ? result.release_date.substring(0, 4) : result.first_air_date.substring(0, 4)}</Item>
            <Divider>.</Divider>
            <Item>
              {result.runtime ? result.runtime : result.episode_runtime}
              &nbsp;minutes
            </Item>
            <Divider>.</Divider>
            <Item>
              {result.genres && result.genres.map((genre, index) => (index === result.genres.length - 1 ? genre.name : `${genre.name} / `))}
            </Item>
          </ItemContainer>
          <Overview>{result.overview}</Overview>
          <Trailer>
            <iframe
              title={result.videos?.results[0].id}
              width="700"
              height="500"
              src={`https://www.youtube.com/embed/${result.videos?.results[0].key}`}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </Trailer>
        </Data>
      </Content>
    </Container>
  )

DetailPresenter.propTypes = {
  result: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.array,
}

export default DetailPresenter
