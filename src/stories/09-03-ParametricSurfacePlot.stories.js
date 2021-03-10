import React from "react";

import VRViz from "vr-viz";

import markdown from "../ReadMe/Plots/ParametricSurfacePlot.md";

const Title = {
  title: "Plots/Surface Plot/Parametric Surface Plot",
};

export default Title;

export const ParametricSurfacePlot = () => (
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
        position: "0 0 0",
        rotation: "0 0 0",
      },
      reloadPageOnExitVR: true,
    }}
    graph={[
      {
        type: "ParametricSurfacePlot",
        style: {
          origin: [0, 0, 0],
          dimensions: {
            width: 10,
            height: 10,
            depth: 10,
          },
        },
        mark: {
          position: {
            x: {
              function: (u, v) => Math.cos(u) * (3 + Math.cos(v)),
              domain: [0, 10],
            },
            y: {
              function: (u, v) => Math.sin(v),
              domain: [0, 10],
            },
            z: {
              function: (u, v) => Math.sin(u) * (3 + Math.cos(v)),
              domain: [0, 10],
            },
          },
          type: "plane",
          style: {
            fill: {
              opacity: 0.4,
              color: "#b71c1c",
            },
            stroke: {
              width: 1,
              color: "#666",
            },
          },
        },
        parameter: {
          parameter1: {
            domain: [0, 2 * Math.PI],
            steps: 50,
          },
          parameter2: {
            domain: [0, 2 * Math.PI],
            steps: 50,
          },
        },
      },
    ]}
  />
);

ParametricSurfacePlot.story = {
  parameters: {
    notes: { markdown },
  },
};
