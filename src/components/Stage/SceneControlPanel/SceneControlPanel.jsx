import { useState, useEffect } from "react";
import PropTypes from "prop-types";

function SceneControlPanel({
  position: [initX, initY],
  onPositionChange,
  zoom,
  onZoomChange,
}) {
  const [x, setX] = useState(initX);
  const [y, setY] = useState(initY);

  useEffect(() => {
    onPositionChange([x, y]);
  }, [onPositionChange, x, y]);

  return (
    <div>
      <div>
        <p>PositionChange</p>
        <label>
          <b>X</b>

          <input
            type="number"
            value={x}
            onChange={({ target }) => {
              setX(Number(target.value));
            }}
          />
        </label>
        <hr />
        <label>
          <b>Y</b>
          <input
            type="number"
            value={y}
            onChange={({ target }) => {
              setY(Number(target.value));
            }}
          />
        </label>
      </div>
    </div>
  );
}

SceneControlPanel.propTypes = {
  position: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  onPositionChange: PropTypes.func.isRequired,
  zoom: PropTypes.number.isRequired,
  onZoomChange: PropTypes.func.isRequired,
};

export default SceneControlPanel;
