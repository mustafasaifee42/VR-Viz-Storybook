import React from "react";

import VRViz from "vr-viz";

import markdown from "../ReadMe/Diagrams/TreeMap.md";

const Title = {
  title: "Diagrams/Treemap",
};

export default Title;

export const Treemap = () => (
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
        position: "0 10 40",
        rotation: "0 0 0",
      },
      reloadPageOnExitVR: true,
    }}
    graph={[
      {
        type: "TreeMap",
        data: {
          dataFile: "data/TreeMap.json",
          fileType: "json",
        },
        style: {
          origin: [0, 0, 0],
          dimensions: {
            width: 50,
            depth: 50,
            height: 5,
          },
        },
        mark: {
          type: "box",
          style: {
            extrusion: {
              field: "size",
              startFromZero: true,
            },
            fill: {
              scaleType: "ordinal",
              opacity: 0.8,
            },
          },
        },
      },
    ]}
  />
);

Treemap.story = {
  parameters: {
    notes: { markdown },
  },
};
