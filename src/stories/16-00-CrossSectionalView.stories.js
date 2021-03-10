import React from "react";

import VRViz from "vr-viz";

import markdown from "../ReadMe/Diagrams/CrossSectionalView.md";

const Title = {
  title: "Diagrams/Cross Sectional View",
};

export default Title;

export const CrossSectionalView = () => (
  <VRViz
    scene={{
      sky: {
        style: {
          color: "#333",
          texture: false,
        },
      },
      lights: [
        {
          type: "directional",
          color: "#fff",
          position: "0 1 1",
          intensity: 1,
          decay: 1,
        },
        {
          type: "ambient",
          color: "#fff",
          intensity: 1,
          decay: 1,
        },
      ],
      camera: {
        position: "0 0 7.5",
        rotation: "0 0 0",
      },
      reloadPageOnExitVR: true,
    }}
    graph={[
      {
        type: "CrossSectionView",
        style: {
          position: [0, 3, 0],
          scale: [25, 25, 25],
        },
        mark: {
          material: {
            type: "lambert",
            fill: {
              opacity: 0.3,
              color: "#ffffff",
            },
            stroke: {
              width: 1,
              color: "#333",
              edgeThresholdAngle: 50,
            },
            highlightOnClick: {
              opacity: 0.8,
              color: "#ff0000",
            },
          },
          object: "data/gearbox_conical/scene.gltf",
        },
      },
    ]}
  />
);

CrossSectionalView.story = {
  parameters: {
    notes: { markdown },
  },
};
