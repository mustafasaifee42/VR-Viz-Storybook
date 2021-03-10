import React from "react";

import VRViz from "vr-viz";

import markdown from "../ReadMe/Plots/SurfacePlot.md";

const Title = {
  title: "Plots/Surface Plot/Surface Plot",
};

export default Title;

export const SurfacePlot = () => (
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
        position: "5 3 10",
        rotation: "0 0 0",
      },
      reloadPageOnExitVR: true,
    }}
    graph={[
      {
        type: "SurfacePlot",
        style: {
          origin: [0, 0, 0],
          dimensions: {
            width: 10,
            height: 10,
            depth: 10,
          },
        },
        mark: {
          type: "plane",
          position: {
            x: {
              domain: [0, 2 * Math.PI],
              steps: 50,
            },
            y: {
              function: (x, z) => x * Math.sin(x) - z * Math.cos(z),
            },
            z: {
              domain: [0, 2 * Math.PI],
              steps: 50,
            },
          },
          style: {
            fill: {
              scaleType: "linear",
              function: (x, z) => x * z,
              color: ["#b71c1c", "#2196f3"],
              opacity: 1,
            },
            stroke: {
              width: 1,
              color: "#999",
            },
          },
        },
        axis: {
          "x-axis": {
            orient: "front-bottom",
            ticks: {
              noOfTicks: 10,
              size: 0.01,
              color: "white",
              opacity: 0.3,
              fontSize: 3,
            },
            grid: {
              color: "white",
              opacity: 0.3,
            },
          },
          "y-axis": {
            orient: "front-left",
            ticks: {
              noOfTicks: 10,
              size: 0.01,
              color: "white",
              opacity: 0.3,
              fontSize: 3,
            },
            grid: {
              color: "white",
              opacity: 0.3,
            },
          },
          "z-axis": {
            ticks: {
              noOfTicks: 10,
              size: 0.01,
              color: "white",
              opacity: 0.3,
              fontSize: 3,
            },
            grid: {
              color: "white",
              opacity: 0.3,
            },
          },
        },
      },
    ]}
  />
);

SurfacePlot.story = {
  parameters: {
    notes: { markdown },
  },
};
