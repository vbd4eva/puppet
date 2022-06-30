import { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import common from "../commonStyles.module.css";
import s from "./InfoBlock.module.css";
import { TbPencil } from "react-icons/tb";

function InfoBlock({ onEditParamChoice, id, ...params }) {
  if (id)
    return (
      <div className={common.block}>
        <p>
          Element <i>ID</i> : <b>{id}</b>
        </p>
        <p>Current Parameters : </p>
        <ul className={s.list}>
          {Object.entries(params).map(([key, value]) => (
            <li key={key} className={s.item}>
              <TbPencil
                className={s.edit}
                size="1.3rem"
                onClick={() => {
                  onEditParamChoice(key);
                }}
              />
              <i>
                {key.split("")[0].toUpperCase() +
                  key.split("").slice(1).join("")}
              </i>
              <b>{value}</b>
            </li>
          ))}
        </ul>
      </div>
    );
}

InfoBlock.propTypes = {
  id: PropTypes.string,
  // title: PropTypes.string,
  // rotation: PropTypes.number,
  // width: PropTypes.number,
  onEditParamChoice: PropTypes.func.isRequired,
};

export default InfoBlock;
