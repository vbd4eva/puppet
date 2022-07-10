import { useState } from "react";
import PropTypes from "prop-types";

import { TbCirclePlus, TbCircleOff } from "react-icons/tb";

import s from "./Stage.module.css";
import BtnIconToggle from "../Buttons/BtnIconToggle/BtnIconToggle";

import SceneControlPanel from "./SceneControlPanel/SceneControlPanel";
import ZoomAdj from "../ControlPanel/ZoomAdj/ZoomAdj";

import {
  getBodiesArr,
  getObjectBodyInitialData,
  setTemporaryBody,
  clearTemporaryObjectsData,
} from "./data/dataHandler.js";

import Object from "./Object/Object";

function Stage({ width = 300, height = 350, selectHahdler, children }) {
  const [showAdjustment, setShowAdjustment] = useState(false);
  const [bodies, setBodies] = useState(() => getBodiesArr());

  const [temporaryBodyId, setTemporaryBodyId] = useState(null);

  const [left, setLeft] = useState(0);
  const [bottom, setBottom] = useState(0);
  const [zoom, setZoom] = useState(1);

  const sceneStyle = {
    left,
    bottom,
    transform: `scale3d(${zoom}, ${zoom}, ${zoom})`,
  };

  function changeScenePosition([x, y]) {
    console.log("changeScenePosition", x, y);
    if (x !== left) setLeft(x);
    if (y !== bottom) setBottom(y);
  }

  function changeSceneZoom(newZoom) {
    if (newZoom === zoom) return;
    // console.log("changeSceneZoom");
    // console.log(zoom);
    setZoom(newZoom);
  }

  function makesNewBodyMenuToggle(active) {
    if (active) {
      const body = getObjectBodyInitialData();
      setTemporaryBody(body);
      setTemporaryBodyId(body.id);
      return;
    }

    clearTemporaryObjectsData();
    setTemporaryBodyId(null);
  }

  return (
    <div className={s.container}>
      <div className={s.scene} style={sceneStyle}>
        {bodies &&
          bodies.map((bodyId) => (
            <Object key={bodyId} id={bodyId} onSelect={selectHahdler} />
          ))}

        {temporaryBodyId && (
          <Object
            key={temporaryBodyId}
            id={temporaryBodyId}
            temporary
            onSelect={selectHahdler}
          />
        )}

        {children}
      </div>
      <div className={s.controller}>
        <BtnIconToggle
          onToggle={makesNewBodyMenuToggle}
          labelOn="Show new Body creation menu"
          labelOff="Hide new Body creation menu"
        >
          <TbCirclePlus key="off" size="1em" />
          <TbCircleOff key="on" size="1rem" />
        </BtnIconToggle>
        <ZoomAdj value={zoom} max={5} onChange={changeSceneZoom} />
        {/* <div className={s.toggle}>
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
        )} */}
      </div>
    </div>
  );
}

Stage.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  onChoosingElement: PropTypes.func,
  selectHahdler: PropTypes.func.isRequired,
  children: PropTypes.node,
};
export default Stage;
