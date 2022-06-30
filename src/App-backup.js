import { useState, useRef } from "react";

import ControlPanel from "./components/ControlPanel/ControlPanel";

import Stage from "./components/Stage/Stage";
import Body from "./components/Body/Body";
import Element from "./components/Element/Element";
import FirstOne from "./components/Body/puppets/FirstOne/FirstOne";

export default function App() {
  const [selectedElementId, setSelectedElementId] = useState(null);

  const getSelectedElement = useRef(null);

  const setSelectedElement = (getElementModel) => {
    const { id, ...model } = getElementModel();
    console.log({ id, ...model });
    getSelectedElement.current = getElementModel;

    if (id === selectedElementId) return;

    setSelectedElementId(id);
  };

  return (
    <div style={{ display: "flex" }}>
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

      {selectedElementId && (
        <>
          <ControlPanel
            getElementModel={getSelectedElement.current}
            // onParamsChange={handleParamsChanging}
          />
        </>
      )}
    </div>
  );
}
