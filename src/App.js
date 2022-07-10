import { useState, useRef, useEffect } from "react";

import ControlPanel from "./components/ControlPanel/ControlPanel";

import Stage from "./components/Stage/Stage";
import Body from "./components/Body/Body";
import Element from "./components/Element/Element";
import FirstOne from "./components/Body/puppets/FirstOne/FirstOne";
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

  const setSelectedElement = (getElementModel) => {
    const { id, ...model } = getElementModel();
    console.log({ id, ...model });
    getSelectedElement.current = getElementModel;

    if (id === selectedElementId) return;

    setSelectedElementId(id);
  };

  return (
    <div ref={refRootContainer} className={s.root}>
      {/* <BtnChangeNumber />
      <hr /> */}
      <div className={s.stage}>
        <Stage>
          {/* <FirstOne setSelectedElement={setSelectedElement} /> */}
          <Body>
            <Element
              initialParams={{
                name: "thighR",
                width: 87,
                rotate: -101,
                left: -10,
              }}
              onSelect={setSelectedElement}
            >
              <Element
                initialParams={{ name: "shinR", width: 76, rotate: -101 }}
                onSelect={setSelectedElement}
              >
                <Element
                  initialParams={{ name: "footR", width: 23, rotate: 90 }}
                  onSelect={setSelectedElement}
                />
              </Element>
            </Element>

            <Element
              initialParams={{
                name: "thighL",
                width: 87,
                rotate: -71,
                left: 10,
              }}
              onSelect={setSelectedElement}
            >
              <Element
                initialParams={{ name: "shinL", width: 76, rotate: -37 }}
                onSelect={setSelectedElement}
              >
                <Element
                  initialParams={{ name: "footL", width: 23, rotate: 56 }}
                  onSelect={setSelectedElement}
                />
              </Element>
            </Element>
          </Body>
        </Stage>
      </div>
      <div className={s.panel}>
        {selectedElementId && (
          <>
            <ControlPanel
              getElementModel={getSelectedElement.current}
              // onParamsChange={handleParamsChanging}
            />
          </>
        )}
      </div>
    </div>
  );
}
