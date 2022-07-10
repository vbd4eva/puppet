import { useState, useRef, useEffect } from "react";
import { nanoid } from "nanoid";
import PropTypes from "prop-types";

import s from "./Element.module.css";
import Bone from "./Bone/Bone";

function Element({
  initialParams: {
    name: initName = "Nemo",
    rotate = 0,
    top: initTop = 0,
    left: initLeft = 0,
    width: initWidth = 50,
  },
  onSelect,
  children,
}) {
  const [name, setName] = useState(initName);
  const [rotation, setRotation] = useState(rotate);
  const [width, setWidth] = useState(initWidth);
  const [top, setTop] = useState(initTop);
  const [left, setLeft] = useState(initLeft);

  const elementId = useRef(nanoid());
  const elModel = useRef(null);

  // const model = {
  //   id: elementId.current,
  //   title: [name, setName],
  //   rotation: [rotation, setRotation],
  //   width: [width, setWidth],
  //   top: [top, setTop],
  //   left: [left, setLeft],
  // };

  useEffect(() => {
    elModel.current = {
      id: elementId.current,
      title: [name, setName],
      rotation: [rotation, setRotation],
      width: [width, setWidth],
      top: [top, setTop],
      left: [left, setLeft],
    };

    // console.log("model");
    // console.log(elModel.current);
  }, [name, rotation, width, top, left]);

  function getElementModel() {
    return elModel.current;
  }

  const onClickHandler = (e) => {
    e.stopPropagation();
    console.log("я нажимаю сюда");
    onSelect(getElementModel);
  };

  const wrapStyle = {
    position: "absolute",
    top: top + "px",
    left: left + "px",
    transform: `rotate(${-rotation}deg)`,
    transformOrigin: " left center",
  };

  const styleCurrent = {
    width,
  };

  const styleChild = {
    position: "absolute",
    left: "100%",
    top: 0,
  };

  return (
    <div
      className={s.wrap}
      // id={elementId.current}
      style={wrapStyle}
      onClick={onClickHandler}
    >
      <div className={s.current} style={styleCurrent}>
        <Bone />
      </div>
      <div className="child" style={styleChild}>
        {children}
      </div>
    </div>
  );
}

Element.propTypes = {
  name: PropTypes.string,
  children: PropTypes.node,
  rotate: PropTypes.number,
  with: PropTypes.number,
  onSelect: PropTypes.func.isRequired,
};

export default Element;
