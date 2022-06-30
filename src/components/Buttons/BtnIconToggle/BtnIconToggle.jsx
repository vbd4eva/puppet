import { useState, useMemo, useRef } from "react";

import PropTypes from "prop-types";

import s from "./BtnIconToggle.module.css";

function BtnIconToggle({
  children,
  onToggle,
  labelOn = "toggled on",
  labelOff = "toggled off",
  initialOn = false,
}) {
  const [pressed, setPressed] = useState(initialOn);

  const condition = pressed ? "on" : "off";

  const icons = useMemo(
    () => {
      const on = children.find(({ key }) => key === "on");
      const off = children.find(({ key }) => key === "off");
      return {
        on,
        off,
      };
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [children.length]
  );

  function clickHandler() {
    setPressed(!pressed);
    onToggle && onToggle();
  }

  return (
    <button
      className={s.btn}
      type="button"
      aria-label={pressed ? labelOn : labelOff}
      aria-pressed={pressed}
      onClick={clickHandler}
    >
      {icons[condition]}
    </button>
  );
}

BtnIconToggle.propTypes = {
  children: PropTypes.node.isRequired,
  onToggle: PropTypes.func,
};

export default BtnIconToggle;
