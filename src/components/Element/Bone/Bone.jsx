// import PropTypes from 'prop-types'
import s from "./Bone.module.css";
import Pole from "./Pole/Pole";

function Bone(prop) {
  const style = {};

  style.bone = {
    position: "relative",
    width: "inherit",
    // transform-origin
    // transform: `rotate(-${rotate}deg)`,
  };

  style.line = {
    width: "inherit",
    height: 1,

    position: "absolute",
    left: 0,
    top: 0,
    // backgroundColor: 'deeppink',
    backgroundColor: "var(--color-Bone-basic)",
    //  backgroundColor: 'red',
  };

  return (
    <div className={s.Bone}>
      <Pole />
      {/* <div className="pole" style={style.pole}></div> */}
      <div className="line" style={style.line}></div>
    </div>
  );
}

// Bone.propTypes = {}

export default Bone;
