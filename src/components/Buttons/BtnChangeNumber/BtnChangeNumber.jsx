import { useState, useRef } from "react";
import PropTypes from "prop-types";

function BtnChangeNumber({ initial = 0, onAction }) {
  const [value, setValue] = useState(initial);
  const timerId = useRef(null);

  function action() {
    setValue((v) => v + 1);
  }

  function speed(callback, time = 1000, amount = 1) {
    callback && callback();
    const planned = Math.floor(time / amount) || 1;
    timerId.current = setTimeout(speed, planned, callback, time, amount + 1);
  }

  function startAction() {
    speed(action);
  }
  function stopAction() {
    clearTimeout(timerId.current);
  }

  return (
    <button
      type="button"
      onMouseDown={startAction}
      onMouseUp={stopAction}
      onTouchStart={startAction}
      onTouchEnd={stopAction}
    >
      BtnChangeNumber {value}
    </button>
  );
}

BtnChangeNumber.propTypes = {
  value: PropTypes.number,
  onAction: PropTypes.func,
};

export default BtnChangeNumber;
