import { useMemo, useState, useEffect } from "react";
import PropTypes from "prop-types";

import { getData } from "../data/dataHandler.js";
import s from "./Object.module.css";

function Object({ id, temporary = false, body = false, onSelect, children }) {
  const obj = useMemo(() => getData(id, temporary), [id, temporary]);

  // title,
  // type,
  // position: { left, bottom },
  // size: { width, height },
  // rotation,
  // childs,

  const [title, setTitle] = useState(obj.title);
  const [type, setType] = useState(obj.type);
  const [left, setLeft] = useState(obj.position.left);
  const [bottom, setBottom] = useState(obj.position.bottom);
  const [width, setWidth] = useState(obj.size.width);
  const [height, setHeight] = useState(obj.size.height);
  const [rotation, setRotation] = useState(obj.rotation);
  const [childs, setChilds] = useState(obj.childs || null);

  useEffect(() => {
    temporary && onSelect(getElementModel);
    return function cleanup() {
      onSelect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getElementModel = () => ({
    id,
    temporary,
    body,
    title: [title, setTitle],
    type: [type, setType],
    left: [left, setLeft],
    bottom: [bottom, setBottom],
    width: [width, setWidth],
    rotation: [rotation, setRotation],
    childs: [childs, setChilds],
  });

  function clickHandler(e) {
    e.stopPropagation();
    onSelect(getElementModel);
  }

  const style = {
    left,
    bottom,
    width,
    height,
    transform: isNaN(rotation) || ` rotate(${-rotation}deg)`,
  };

  return (
    <div className={s[type]} style={style} onClick={clickHandler} id={id}>
      {childs?.length && (
        <div className={s.childBox}>
          {childs.map((objId) => (
            <Object key={objId} id={objId} onSelect={onSelect} />
          ))}
        </div>
      )}
    </div>
  );
}

Object.propTypes = {
  id: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
  children: PropTypes.node,
};

export default Object;
