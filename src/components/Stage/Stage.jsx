import React from "react";
import PropTypes from "prop-types";

import { TbAdjustments, TbAdjustmentsOff } from "react-icons/tb";

import s from "./Stage.module.css";
import BtnIconToggle from "../Buttons/BtnIconToggle/BtnIconToggle";
import { useState } from "react";
import SceneControlPanel from "./SceneControlPanel/SceneControlPanel";

function Stage({ width = 300, height = 350, children }) {
  // const style = {
  //   width,
  //   height,
  //   backgroundColor: "#ccc",
  //   position: "relative",
  // };
  const [showAdjustment, setShowAdjustment] = useState(false);

  const [left, setLeft] = useState(0);
  const [bottom, setBottom] = useState(0);

  const sceneStyle = {
    left,
    bottom,
  };

  function changeScenePosition([x, y]) {
    console.log("changeScenePosition", x, y);
    if (x !== left) setLeft(x);
    if (y !== bottom) setBottom(y);
  }

  function changeSceneZoom(zoom) {
    console.log("changeSceneZoom");
    console.log(zoom);
  }

  return (
    <div className={s.container}>
      <div className={s.scene} style={sceneStyle}>
        {children}
      </div>
      <div className={s.controller}>
        <div className={s.toggle}>
          <BtnIconToggle
            onToggle={() => {
              setShowAdjustment(!showAdjustment);
            }}
            labelOn="Show Stage Adjustment"
            labelOff="Hide Stage Adjustment"
          >
            <TbAdjustments key="off" size="1em" />
            <TbAdjustmentsOff key="on" size="1rem" />
          </BtnIconToggle>
        </div>
        {showAdjustment && (
          <div className={s.panel}>
            <SceneControlPanel
              position={[0, 0]}
              onPositionChange={changeScenePosition}
              zoom={1}
              onZoomChange={changeSceneZoom}
            />
          </div>
        )}
      </div>
    </div>
  );
}

Stage.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  onChoosingElement: PropTypes.func,
  children: PropTypes.node,
};
export default Stage;
