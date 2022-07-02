import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import s from "./ZoomAdj.module.css";

function ZoomAdj({ value, max, min = 0.1, onChange }) {
  const [zoom, setZoom] = useState(value);
  console.log("zoom");
  console.log(zoom);

  const getValidZoom = (action) => {
    if (action < 0 ? zoom === min : zoom === max) return;

    const changer = zoom < 1 || zoom * action === -1 ? 0.1 : 1;
    let validZoom = zoom + changer * action;
    validZoom = validZoom < 1 ? Number(validZoom.toFixed(1)) : validZoom;

    setZoom(validZoom);
  };

  useEffect(() => {
    onChange(zoom);
  }, [onChange, zoom]);

  function decrement() {
    getValidZoom(-1);
  }
  function increment() {
    getValidZoom(1);
  }
  function reset() {
    setZoom(1);
  }

  return (
    <div>
      <p>
        <span>Zoom</span>
        <> x</>
        <span aria-label="Zoom value">{zoom}</span>
        <span>
          {zoom === max && "is maximal value"}
          {zoom === min && "is minnimal value"}
        </span>
        <div>
          <button type="button" onClick={decrement} disabled={zoom === min}>
            -
          </button>

          <button type="button" onClick={reset}>
            reset
          </button>

          <button type="button" onClick={increment} disabled={zoom === max}>
            +
          </button>
        </div>
      </p>
    </div>
  );
}

ZoomAdj.propTypes = {
  value: PropTypes.number.isRequired,
  max: PropTypes.number,
  min: PropTypes.number,
  onChange: PropTypes.func,
};

export default ZoomAdj;
