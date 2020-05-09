import React from "react";
import PropTypes from "prop-types";

const Loader = (props) => (
  <div className="loader">
    <h2>{props.message}</h2>
    <img
      className="loader-img"
      src="https://thumbs.gfycat.com/PlainVapidGalah-small.gif"
      alt="Loading..."
    />{" "}
  </div>
);

Loader.propTypes = {
  message: PropTypes.string,
};

export default Loader;
