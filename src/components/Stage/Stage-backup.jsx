import React from "react";
import PropTypes from "prop-types";

function Stage({ width = 300, height = 350, children }) {
  const style = {
    width,
    height,
    backgroundColor: "#ccc",
    position: "relative",
  };

  return <div style={style}>{children}</div>;
}

Stage.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  onChoosingElement: PropTypes.func,
  children: PropTypes.node,
};
export default Stage;
