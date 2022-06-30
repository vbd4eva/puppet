import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import common from "../../commonStyles.module.css";

function WidthManager({ id, value, onChange }) {
  const controlledId = useRef(null);
  const [width, setWidth] = useState(value);

  useEffect(() => {
    if (id !== controlledId.current) {
      controlledId.current = id;
      setWidth(value);
      return;
    }
    if (width !== value) onChange(width);
  }, [id, onChange, value, width]);

  return (
    <div className={common.block}>
      <p>Width Control block</p>
      <label>
        <input
          type="number"
          value={width}
          onChange={({ target }) => {
            const abs = Math.abs(target.value);
            setWidth(abs);
          }}
        />
      </label>
    </div>
  );
}

WidthManager.propTypes = {
  id: PropTypes.string,
  width: PropTypes.number,
  onChange: PropTypes.func,
};

export default WidthManager;
