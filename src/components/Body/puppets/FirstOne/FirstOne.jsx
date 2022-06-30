import PropTypes from "prop-types";
import Element from "../../../Element/Element";
import Body from "../../Body";

export default function FirstOne({ setSelectedElement }) {
  const multiplier = 2;

  return (
    <>
      <Body>
        <Element
          initialParams={{
            name: "armLeft",
            width: multiplier * 15,
            rotate: -106,
            top: multiplier * -20,
            left: multiplier * 5,
          }}
          onSelect={setSelectedElement}
        >
          <Element
            initialParams={{
              name: "forearmLeft",
              width: multiplier * 13,
              rotate: 16,
            }}
            onSelect={setSelectedElement}
          >
            <Element
              initialParams={{
                name: "handLeft",
                width: multiplier * 10,
                rotate: -30,
              }}
              onSelect={setSelectedElement}
            />
          </Element>
        </Element>
        <Element
          initialParams={{
            name: "armRight",
            width: multiplier * 15,
            rotate: -106,
            top: multiplier * -20,
          }}
          onSelect={setSelectedElement}
        >
          <Element
            initialParams={{
              name: "forearmRight",
              width: multiplier * 13,
              rotate: 16,
            }}
            onSelect={setSelectedElement}
          >
            <Element
              initialParams={{
                name: "handRight",
                width: multiplier * 10,
                rotate: -30,
              }}
              onSelect={setSelectedElement}
            />
          </Element>
        </Element>

        <Element
          initialParams={{
            name: "legRight",
            width: multiplier * 20,
            rotate: -92,
            top: multiplier * 5,
          }}
          onSelect={setSelectedElement}
        >
          <Element
            initialParams={{
              name: "shinRight",
              width: multiplier * 20,
              rotate: -19,
            }}
            onSelect={setSelectedElement}
          >
            <Element
              initialParams={{
                name: "footRight",
                width: multiplier * 8,
                rotate: 24,
              }}
              onSelect={setSelectedElement}
            >
              <Element
                initialParams={{
                  name: "toesRight",
                  width: multiplier * 5,
                  rotate: 85,
                }}
                onSelect={setSelectedElement}
              />
            </Element>
          </Element>
        </Element>

        <Element
          initialParams={{
            name: "legLeft",
            width: multiplier * 20,
            rotate: -92,
            left: -5,
            top: multiplier * 5,
          }}
          onSelect={setSelectedElement}
        >
          <Element
            initialParams={{
              name: "shinLeft",
              width: multiplier * 20,
              rotate: -19,
            }}
            onSelect={setSelectedElement}
          >
            <Element
              initialParams={{
                name: "footLeft",
                width: multiplier * 8,
                rotate: 24,
              }}
              onSelect={setSelectedElement}
            >
              <Element
                initialParams={{
                  name: "toesLeft",
                  width: multiplier * 5,
                  rotate: 85,
                }}
                onSelect={setSelectedElement}
              />
            </Element>
          </Element>
        </Element>
      </Body>
    </>
  );
}

FirstOne.propTypes = {
  setSelectedElement: PropTypes.func,
};
