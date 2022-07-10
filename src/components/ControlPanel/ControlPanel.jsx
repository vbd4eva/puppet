import { useState, useMemo } from "react";
import PropTypes from "prop-types";

import s from "./ControlPanel.module.css";
// import common from "./commonStyles.module.css";
import InfoBlock from "./InfoBlock/InfoBlock";
import TitleManager from "./paramsManagers/TitleManager/TitleManager";
import RotationManager from "./paramsManagers/RotationManager/RotationManager";
import WidthManager from "./paramsManagers/WidthManager/WidthManager";

function ControlPanel({ selectedElementModel }) {
  const [editParam, setEditParam] = useState(null);

  const {
    id,
    temporary,
    body,
    type: [type],
    title: [title, setTitle],
    left: [left, setLeft],
    bottom: [bottom, setBottom],
    rotation: [rotation, setRotation],
    width: [width, setWidth],
    childs: [childs, setChilds],
  } = selectedElementModel;

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
      value: selectedElementModel[editParam][0],
      onChange: selectedElementModel[editParam][1],
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
        temporary
        body
        type={type}
        title={title}
        left={left}
        bottom={bottom}
        rotation={rotation}
        width={width}
        childs={childs}
        onEditParamChoice={editParamChoiceHandler}
      />
    </div>
  );
}

ControlPanel.propTypes = {
  selectedElementModel: PropTypes.object.isRequired,
};

export default ControlPanel;
