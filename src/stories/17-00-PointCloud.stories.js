import React from "react";

import VRViz from "vr-viz";

import markdown from "../ReadMe/Diagrams/PointCloud.md";

const Title = {
  title: "Diagrams/Point Cloud",
};

export default Title;

export const PointCloud = () => (
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
        position: "8 5 12",
        rotation: "0 0 0",
      },
      reloadPageOnExitVR: true,
    }}
    graph={[
      {
        type: "PointCloud",
        data: {
          dataFile: "data/PointCloud.ply",
          fileType: "ply",
        },
        style: {
          origin: [0, 0, 0],
          objectScale: 0.01,
        },
        mark: {
          type: "sphere",
          style: {
            radius: 0.05,
            fill: {
              opacity: 0.8,
              color: "#2196f3",
            },
          },
        },
      },
    ]}
  />
);

PointCloud.story = {
  parameters: {
    notes: { markdown },
  },
};
