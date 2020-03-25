import * as React from "react";
import { animated, useSpring } from "react-spring";
import { useState } from "react";

interface Props {
  text: string;
  disabled: boolean;
}

export const Button = (props: Props): JSX.Element => {
  const [state, toggle] = useState(true);
  const { x } = useSpring({ from: { x: 0 }, x: state ? 1 : 0, config: { duration: 1000 } });
  return (
    <button className="button submit-button" onClick={(): void => toggle(!state)} disabled={props.disabled}>
      <animated.div
        style={{
          opacity: x.interpolate({ range: [0, 1], output: [0.3, 1] }),
          transform: x
            .interpolate({
              range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
              output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1]
            })
            .interpolate((x) => `scale(${x})`)
        }}
      >
        {props.text}
      </animated.div>
    </button>
  );
};
