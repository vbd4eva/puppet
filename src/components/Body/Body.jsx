import PropTypes from "prop-types";
import Pole from "../Element/Bone/Pole/Pole";
import s from "./Body.module.css";

function Body({ children }) {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    backgroundColor: "#ae08cb4d",
  };

  return (
    <div className={s.Body} style={style}>
      <Pole />
      {children}
    </div>
  );
}

Body.propTypes = {
  children: PropTypes.node,
};

export default Body;
