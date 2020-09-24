import React, { Fragment } from "react";
import loading from "../../assets/loading.gif";

const Loading = () => (
  <Fragment>
    <img
      src={loading}
      alt='Loading...'
      style={{ width: "500px", margin: "auto", display: "block" }}
    />
  </Fragment>
);

export default Loading;