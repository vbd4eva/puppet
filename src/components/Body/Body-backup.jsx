import PropTypes from "prop-types";
import Pole from "../Element/Bone/Pole/Pole";
import s from "./Body.module.css";

//
import bodySingle from "../../data/body.json";

function Body({ children }) {
  console.log("bodySingle");
  console.log(bodySingle);

  const {
    position: { left, bottom },
    width,
    height,
  } = bodySingle;

  const style = {
    position: "absolute",
    left,
    bottom,
    width,
    height,
    // transform: "translate(-50%,-50%)",
    // backgroundColor: "#ae08cb4d",
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
