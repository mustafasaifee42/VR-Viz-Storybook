import React from "react";

import VRViz from "vr-viz";

import markdown from "../ReadMe/Charts/BarGraph.md";

const Title = {
  title: "Graphs or Charts/Bargraph/Bargragh With Cylinder",
};

export default Title;

export const BargraghWithCylinder = () => (
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
        position: "10 0 20",
        rotation: "0 0 0",
      },
      reloadPageOnExitVR: true,
    }}
    graph={[
      {
        type: "BarGraph",
        data: {
          dataFile: "data/data1.csv",
          fileType: "csv",
          fieldDesc: [
            ["x", "text"],
            ["z", "text"],
            ["height", "number"],
          ],
        },
        style: {
          origin: [0, 0, 0],
          dimensions: {
            width: 20,
            height: 5,
            depth: 10,
          },
        },
        mark: {
          type: "cylinder",
          position: {
            x: {
              field: "x",
            },
            z: {
              field: "z",
            },
          },
          style: {
            height: {
              startFromZero: true,
              field: "height",
            },
            fill: {
              opacity: 0.8,
              scaleType: "linear",
              field: "height",
              color: ["#b71c1c", "#2196f3"],
            },
          },
        },
        axis: {
          "x-axis": {
            orient: "back-bottom",
            ticks: {
              noOfTicks: 10,
              size: 0.01,
              color: "white",
              opacity: 0.7,
              fontSize: 3,
            },
            grid: {
              color: "white",
              opacity: 0.7,
            },
          },
          "y-axis": {
            orient: "back-left",
            ticks: {
              noOfTicks: 10,
              size: 0.01,
              color: "white",
              opacity: 0.7,
              fontSize: 3,
            },
            grid: {
              color: "white",
              opacity: 0.7,
            },
          },
          "z-axis": {
            orient: "bottom-left",
            ticks: {
              noOfTicks: 10,
              size: 0.01,
              color: "white",
              opacity: 0.7,
              fontSize: 3,
            },
            grid: {
              color: "white",
              opacity: 0.7,
            },
          },
        },
      },
    ]}
  />
);

BargraghWithCylinder.story = {
  parameters: {
    notes: { markdown },
  },
};
