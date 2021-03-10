import React from "react";

import VRViz from "vr-viz";

import markdown from "../ReadMe/Diagrams/ContourMap.md";

const Title = {
  title: "Diagrams/Contour Map/Contour Map",
};

export default Title;

export const ContourMap = () => (
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
        position: "0 0 10",
        rotation: "0 0 0",
      },
      reloadPageOnExitVR: true,
    }}
    graph={[
      {
        type: "ContourMap",
        data: {
          dataFile: "data/contourMapData.csv",
          fileType: "text",
        },
        style: {
          origin: [0, 0, 0],
          objectScale: {
            ground: 0.1,
            height: 0.1,
          },
        },
        mark: {
          heightThreshold: 100,
          style: {
            fill: {
              scaleType: "linear",
              opacity: 0.7,
              color: ["#b71c1c", "#2196f3"],
            },
            stroke: {
              width: 1,
              color: "#aaa",
            },
          },
        },
      },
    ]}
  />
);

ContourMap.story = {
  parameters: {
    notes: { markdown },
  },
};
