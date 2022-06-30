import { useState, useEffect, useRef } from "react";

import PropTypes from "prop-types";
import s from "./TitleManager.module.css";

function TitleManager({ id, value, onChange }) {
  const controlledId = useRef(null);
  const [title, setTitle] = useState(value);

  useEffect(() => {
    if (id !== controlledId.current) {
      controlledId.current = id;
      setTitle(value);
      return;
    }
    if (title !== value) onChange(title);
  }, [id, onChange, value, title]);

  return (
    <div className={s.wrap}>
      <p>Title Control block</p>
      <label>
        <input
          className={s.inputNumber}
          type="text"
          value={title}
          onChange={({ target }) => {
            setTitle(target.value);
          }}
        />
      </label>
    </div>
  );
}

TitleManager.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TitleManager;
