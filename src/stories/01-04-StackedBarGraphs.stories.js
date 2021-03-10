import React from "react";

import VRViz from "vr-viz";

import markdown from "../ReadMe/Charts/StackedBarGraph.md";

const Title = {
  title: "Graphs or Charts/Bargraph/Stacked Bargraph",
};

export default Title;

export const StackedBargraph = () => (
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
        position: "10 5 25",
        rotation: "0 0 0",
      },
      reloadPageOnExitVR: true,
    }}
    graph={[
      {
        type: "StackedBarGraph",
        data: {
          dataFile: "data/data2.csv",
          fileType: "csv",
          fieldDesc: [
            ["LOCATION", "text"],
            ["TIME", "text"],
            ["AGR", "number"],
            ["INDUSTRY", "number"],
          ],
        },
        style: {
          origin: [0, 0, 0],
          dimensions: {
            width: 30,
            height: 20,
            depth: 20,
          },
        },
        mark: {
          type: "box",
          position: {
            x: {
              field: "LOCATION",
            },
            z: {
              field: "TIME",
            },
          },
          style: {
            padding: {
              x: 0.6,
              z: 0.6,
            },
            height: {
              field: ["AGR", "INDUSTRY"],
              startFromZero: true,
            },
            fill: {
              scaleType: "ordinal",
              opacity: 0.8,
              color: ["#b71c1c", "#2196f3"],
              field: ["AGR", "INDUSTRY"],
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
              opacity: 0.7,
              fontSize: 3,
            },
            grid: {
              color: "white",
              opacity: 0.7,
            },
          },
          "y-axis": {
            orient: "front-left",
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

StackedBargraph.story = {
  parameters: {
    notes: { markdown },
  },
};
