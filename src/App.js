import { useState, useRef, useEffect } from "react";

import ControlPanel from "./components/ControlPanel/ControlPanel";

import Stage from "./components/Stage/Stage";

import BtnChangeNumber from "./components/Buttons/BtnChangeNumber/BtnChangeNumber";

import s from "./App.module.css";

export default function App() {
  useEffect(() => {
    console.log("useEffect");
    console.log("refRootContainer");

    // getGeometry(refRootContainer.current);
  }, []);

  //   function getGeometry(htmlElRef) {
  //     const { offsetWidth, offsetHeight } = htmlElRef;
  //     const { body, documentElement } = document;

  //     // window.innerWidth ; // полная ширина окна
  //     //document.documentElement.clientWidth; // ширина окна за вычетом полосы прокрутки

  //     const res = {
  //       current: { w: offsetWidth, h: offsetHeight },
  //       document: {
  //         w: documentElement.clientWidth,
  //         h: documentElement.clientHeight,
  //       },
  //       body: { w: body.clientWidth, h: body.clientHeight },
  //     };
  //     console.log(res);
  //     return res;
  //   }

  const [selectedElementId, setSelectedElementId] = useState(null);

  const getSelectedElement = useRef(null);

  const refRootContainer = useRef(null);

  function clearSelectedElement() {
    getSelectedElement.current = null;
    setSelectedElementId(null);
  }

  const setSelectedElement = (getElementModel) => {
    if (!getElementModel) {
      clearSelectedElement();
      return;
    }
    const { id, ...model } = getElementModel();
    // console.log({ id, ...model });
    getSelectedElement.current = getElementModel;

    if (id === selectedElementId) return;

    setSelectedElementId(id);
  };

  return (
    <div ref={refRootContainer} className={s.root}>
      <BtnChangeNumber />
      <hr />
      <div className={s.stage}>
        <Stage selectHahdler={setSelectedElement} />
      </div>
      <div className={s.panel}>
        {selectedElementId && (
          <ControlPanel selectedElementModel={getSelectedElement.current()} />
        )}
      </div>
    </div>
  );
}
