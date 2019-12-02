import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Loader from "Components/Loader";
import { Route, Link, withRouter } from "react-router-dom";
import Production from "Routes/Production";
import Country from "Routes/Country";

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  padding: 50px;
`;

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${props => props.bgImage});
  background-position: center;
  background-size: cover;
  filter: blur(3px);
  opacity: 0.5;
  z-index: 0;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 1;
`;

const Cover = styled.img`
  height: 100%;
`;

const Data = styled.div`
  margin-left: 30px;
`;

const Title = styled.h3`
  font-size: 32px;
`;

const ItemContainer = styled.div`
  margin: 20px 0;
`;

const Item = styled.span`
  &:not(:last-child)::after {
    display: inline-block;
    content: "";
    vertical-align: middle;
    margin: 0 10px;
    width: 3px;
    height: 3px;
    background-color: #fff;
    border-radius: 50%;
  }
`;

const Img = styled.img`
  display: inline-block;
  vertical-align: middle;
  height: 15px;
`;

const Overview = styled.p`
  font-size: 13px;
  opacity: 0.8;
  line-height: 1.5;
`;

const Info = styled.div`
  margin-top: 20px;
  display: flex;
`;

const Video = styled.iframe`
  margin-right: 20px;
  height: 233px;
`;

const TabContainer = styled.div``;

const Tabs = styled.ul`
  display: flex;
`;

const Tab = styled.li``;

const TabLink = styled(Link)`
  display: block;
  width: 130px;
  padding: 13px 0;
  background-color: ${props =>
    props.current ? "#000" : "rgba(20, 20, 20, 0.8)"};
  color: ${props =>
    props.current ? "rgba(255, 255, 255, 0.8)" : "rgba(255, 255, 255, 0.5)"};
  text-align: center;
`;

const DetailPresenter = withRouter(
  ({ location: { pathname }, result, loading, error, isMovie }) =>
    loading ? (
      <>
        <Helmet>
          <title>Loading | Nomflix</title>
        </Helmet>
        <Loader />
      </>
    ) : (
      <Container>
        <Helmet>
          <title>{result.title ? result.title : result.name} | Nomflix</title>
        </Helmet>
        <Backdrop
          bgImage={`https://image.tmdb.org/t/p/original${result.backdrop_path}`}
        />
        <Content>
          <Cover
            src={
              result.poster_path
                ? `https://image.tmdb.org/t/p/original${result.poster_path}`
                : require("../../assets/noPosterSmall.png")
            }
          />
          <Data>
            <Title>{result.title ? result.title : result.name}</Title>
            <ItemContainer>
              <Item>
                {result.release_date
                  ? result.release_date.substring(0, 4)
                  : result.first_air_date.substring(0, 4)}
              </Item>
              <Item>
                {result.runtime ? result.runtime : result.episode_run_time[0]}
                min
              </Item>
              <Item>
                {result.genres &&
                  result.genres.map((genre, index) =>
                    index === result.genres.length - 1
                      ? genre.name
                      : `${genre.name} / `
                  )}
              </Item>
              {result.imdb_id && (
                <a
                  href={`https://www.imdb.com/title/${result.imdb_id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Img src={require("../../assets/imdb_logo.svg")}></Img>
                </a>
              )}
            </ItemContainer>
            <Overview>
              {result.overview.length > 400
                ? `${result.overview.substring(0, 400)}...`
                : result.overview}
            </Overview>
            <Info>
              {result.videos.results[0] ? (
                <Video
                  src={`https://www.youtube.com/embed/${result.videos.results[0].key}`}
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />
              ) : null}
              <TabContainer>
                <Tabs>
                  <Tab
                    active={
                      pathname ===
                      `/${isMovie ? "movie" : "show"}/${result.id}/production`
                    }
                  >
                    <TabLink
                      to={`/${isMovie ? "movie" : "show"}/${
                        result.id
                      }/production`}
                      current={
                        pathname ===
                        `/${isMovie ? "movie" : "show"}/${result.id}/production`
                      }
                    >
                      Production
                    </TabLink>
                  </Tab>
                  <Tab
                    active={
                      pathname ===
                      `/${isMovie ? "movie" : "show"}/${result.id}/country`
                    }
                  >
                    <TabLink
                      to={`/${isMovie ? "movie" : "show"}/${result.id}/country`}
                      current={
                        pathname ===
                        `/${isMovie ? "movie" : "show"}/${result.id}/country`
                      }
                    >
                      Country
                    </TabLink>
                  </Tab>
                </Tabs>
                <Route
                  path={`/${isMovie ? "movie" : "show"}/:id/production`}
                  component={Production}
                />
                <Route
                  path={`/${isMovie ? "movie" : "show"}/:id/country`}
                  component={Country}
                />
              </TabContainer>
            </Info>
          </Data>
        </Content>
      </Container>
    )
);

DetailPresenter.propTypes = {
  result: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  isMovie: PropTypes.bool
};

export default DetailPresenter;
