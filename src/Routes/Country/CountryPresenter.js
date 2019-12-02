import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "Components/Loader";

const List = styled.ul`
  padding: 20px;
  width: 260px;
  background-color: #000;
`;

const Item = styled.li`
  color: rgba(255, 255, 255, 0.8);
  font-size: 13px;
  line-height: 1.5;
  & + li {
    margin-top: 15px;
  }
`;

const CountryPresenter = ({ result, loading, error }) =>
  loading ? (
    <>
      <Loader />
    </>
  ) : (
    <List>
      <Item>
        {result.production_countries
          ? result.production_countries.map(country => country.name)
          : result.origin_country}
      </Item>
    </List>
  );

CountryPresenter.propTypes = {
  result: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string
};

export default CountryPresenter;
