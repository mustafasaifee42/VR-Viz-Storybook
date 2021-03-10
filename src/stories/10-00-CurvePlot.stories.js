import React from "react";

import VRViz from "vr-viz";

import markdown from "../ReadMe/Plots/ContourPlot.md";

const Title = {
  title: "Plots/Curve Plot/Curve Plot",
};

export default Title;

export const CurvePlot = () => (
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
        type: "ContourPlot",
        style: {
          origin: [0, 0, 0],
          dimensions: {
            width: 10,
            height: 10,
            depth: 10,
          },
        },
        mark: {
          type: "line",
          position: {
            x: {
              function: (y) => Math.sin(y),
            },
            y: {
              domain: [0, 6 * Math.PI],
              range: [0, 10],
              steps: 150,
            },
            z: {
              function: (y) => Math.cos(y),
            },
          },
          style: {
            opacity: 1,
            color: "#2196f3",
          },
        },
        axis: {
          "x-axis": {
            orient: "front-bottom",
            ticks: {
              noOfTicks: 10,
              size: 0.01,
              color: "white",
              opacity: 0.6,
              fontSize: 3,
            },
            grid: {
              color: "white",
              opacity: 0.6,
            },
          },
          "y-axis": {
            orient: "front-left",
            ticks: {
              noOfTicks: 10,
              size: 0.01,
              color: "white",
              opacity: 0.6,
              fontSize: 3,
            },
            grid: {
              color: "white",
              opacity: 0.6,
            },
          },
          "z-axis": {
            ticks: {
              noOfTicks: 10,
              size: 0.01,
              color: "white",
              opacity: 0.6,
              fontSize: 3,
            },
            grid: {
              color: "white",
              opacity: 0.6,
            },
          },
        },
      },
    ]}
  />
);

CurvePlot.story = {
  parameters: {
    notes: { markdown },
  },
};
