import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

import InputRange from "react-input-range";
import { PieChart } from "react-minimal-pie-chart";
import { TbRotate2, TbRotateClockwise2 } from "react-icons/tb";

import "react-input-range/lib/css/index.css";
import s from "./RotationManager.module.css";

function RotationManager({ id, value, onChange }) {
  const controlledId = useRef(null);
  const [rotation, setRotation] = useState(value);

  useEffect(() => {
    if (id !== controlledId.current) {
      console.log("(id !== controlledId.current)");
      controlledId.current = id;
      setRotation(value);
      return;
    }
    if (value !== rotation) onChange(rotation);
  }, [id, onChange, value, rotation]);

  function onDecrementClick() {
    setRotation(rotation - 1);
  }
  function onIncrementClick() {
    setRotation(rotation + 1);
  }

  return (
    <div className={s.rotation}>
      <p className={s.title}>Rotation Control block</p>

      <button
        className={s.iconBtn}
        type="button"
        onClick={onDecrementClick}
        aria-label="decrement degrees of rotation"
      >
        <TbRotate2 size="4rem" />
      </button>

      <label className={s.indicator}>
        <PieChart
          className={s.PieChart}
          data={[{ value: -rotation }]}
          totalValue={360}
          // lineWidth={20}
          // label={({ dataEntry }) => -dataEntry.value + "deg"}
          // labelStyle={{
          //   fontSize: "25px",
          //   fontFamily: "sans-serif",
          //   fill: "#E38627",
          // }}
          labelPosition={0}
          animate={true}
          startAngle={0}
          // style={{ width: "inherit" }}
        />
        <input
          className={s.inputNumber}
          type="number"
          value={rotation}
          onChange={({ target }) => {
            const abs = Math.abs(target.value);
            const angle =
              abs > 180 ? (abs / target.value) * 180 : target.value || 0;
            setRotation(angle);
          }}
        />
      </label>

      <button
        className={s.iconBtn}
        type="button"
        onClick={onIncrementClick}
        aria-label="increment degrees of rotation"
      >
        <TbRotateClockwise2 size="4rem" />
      </button>

      <div className={s.range}>
        <InputRange
          maxValue={180}
          minValue={-180}
          value={rotation}
          onChange={(rotation) => {
            console.log("value", rotation);
            setRotation(rotation);
          }}
          onChangeComplete={(value) => console.log("onChangeComplete", value)}
        />
      </div>
    </div>
  );
}

RotationManager.propTypes = {};

export default RotationManager;
