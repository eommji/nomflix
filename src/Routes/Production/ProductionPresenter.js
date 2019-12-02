import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
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

const ProductionPresenter = ({ result, loading, error }) =>
  loading ? (
    <>
      <Loader />
    </>
  ) : (
    <List>
      {result.production_companies &&
        result.production_companies.map((company, index) => (
          <Item key={index}>{company.name}</Item>
        ))}
    </List>
  );

ProductionPresenter.propTypes = {
  result: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string
};

export default ProductionPresenter;
