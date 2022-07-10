import PropTypes from "prop-types";

import { getObjectDataById } from "../data/dataHandler.js";
import s from "./Object.module.css";

function getData(id) {
  //   console.log("get object data by id : " + id);
  return getObjectDataById(id);
}

function Object({ id, children }) {
  //   const data = getData(id);

  const {
    type,
    position: { left, bottom },
    size: { width, height },
    rotation,
    childs,
  } = getData(id);

  const style = {
    left,
    bottom,
    width,
    height,
    transform: isNaN(rotation) || ` rotate(${-rotation}deg)`,
  };

  function clickHandler(e) {
    e.stopPropagation();
    console.log(e.target);
  }

  return (
    <div className={s[type]} style={style} onClick={clickHandler} id={id}>
      {childs?.length && (
        <div className={s.childBox}>
          {childs.map((objId) => (
            <Object key={objId} id={objId} />
          ))}
        </div>
      )}
    </div>
  );
}

Object.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Object;
