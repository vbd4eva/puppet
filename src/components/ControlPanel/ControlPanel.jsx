import { useState, useEffect } from "react";
import PropTypes from "prop-types";

import s from "./ControlPanel.module.css";
// import common from "./commonStyles.module.css";
import InfoBlock from "./InfoBlock/InfoBlock";
import TitleManager from "./paramsManagers/TitleManager/TitleManager";
import RotationManager from "./paramsManagers/RotationManager/RotationManager";
import WidthManager from "./paramsManagers/WidthManager/WidthManager";

function ControlPanel({ getElementModel }) {
  const [editParam, setEditParam] = useState(null);

  const elementModel = getElementModel();
  const {
    id,
    title: [title, setTitle],
    rotation: [rotation, setRotation],
    width: [width, setWidth],
  } = elementModel;

  // useEffect(() => {
  //   setEditParam(null);
  // }, [id]);

  const editParamChoiceHandler = (param) => {
    const newParam = param === editParam ? null : param;
    setEditParam(newParam);
  };

  const showManager = (param) => param === editParam;

  const getManagerProps = () => {
    if (!editParam) return;
    return {
      id,
      value: elementModel[editParam][0],
      onChange: elementModel[editParam][1],
    };
  };

  //

  return (
    <div className={s.wrap}>
      {showManager("title") && <TitleManager {...getManagerProps()} />}
      {showManager("width") && <WidthManager {...getManagerProps()} />}
      {showManager("rotation") && <RotationManager {...getManagerProps()} />}

      <p>Control Panel</p>
      <InfoBlock
        id={id}
        title={title}
        rotation={rotation}
        width={width}
        onEditParamChoice={editParamChoiceHandler}
      />
    </div>
  );
}

ControlPanel.propTypes = {
  getElementModel: PropTypes.func.isRequired,
};

export default ControlPanel;
