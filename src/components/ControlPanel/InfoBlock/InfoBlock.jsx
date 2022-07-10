import { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import common from "../commonStyles.module.css";
import s from "./InfoBlock.module.css";
import { TbPencil } from "react-icons/tb";

function InfoBlock({
  onEditParamChoice,
  id,
  temporary,
  body,
  type,
  ...params
}) {
  console.log("params");
  console.log(params);
  if (id)
    return (
      <>
        <div className={s.block}>
          <div className={s.properties}>
            {temporary && <span>temporary</span>}
            {body && <b>body</b>}
            {id && (
              <span>
                id:<i>{id}</i>
              </span>
            )}
          </div>
          <div className={s.title}>title: {params.title}</div>
          <ul className={s.params}>
            <li>
              left: <b>{params.left}</b>
            </li>
            <li>
              bottom: <b>{params.bottom}</b>
            </li>
            <li>
              rotation: <b>{params.rotation}</b>
            </li>
            {Boolean(params.width) && (
              <li>
                width: <b>{params.width}</b>
              </li>
            )}
          </ul>
          {params.childs && (
            <>
              <span>Children elements</span>
              <ul>
                {params.childs.map((i) => (
                  <li>{i}</li>
                ))}
              </ul>
            </>
          )}
        </div>
        {/*  */}
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
      </>
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
