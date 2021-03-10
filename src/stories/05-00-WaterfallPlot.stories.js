import React from "react";

import VRViz from "vr-viz";

import markdown from "../ReadMe/Charts/WaterFallPlot.md";

const Title = {
  title: "Graphs or Charts/Waterfall Plot/Waterfall Plot",
};

export default Title;

export const WaterfallPlot = () => (
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
        position: "10 5 12",
        rotation: "0 0 0",
      },
      reloadPageOnExitVR: true,
    }}
    graph={[
      {
        type: "WaterFallPlot",
        data: {
          dataFile: "data/data5.csv",
          fileType: "csv",
          fieldDesc: [
            ["x", "number"],
            [" -3", "number"],
            ["-2.8", "number"],
            ["-2.6", "number"],
            ["-2.4", "number"],
            ["-2.2", "number"],
            ["-2.0", "number"],
            ["-1.8", "number"],
            ["-1.6", "number"],
            ["-1.4", "number"],
            ["-1.2", "number"],
            ["-1.0", "number"],
            ["-0.8", "number"],
            ["-0.6", "number"],
            ["-0.4", "number"],
            ["-0.2", "number"],
            ["0.0", "number"],
            ["0.2", "number"],
            ["0.4", "number"],
            ["0.6", "number"],
            ["0.8", "number"],
            ["1.0", "number"],
            ["1.2", "number"],
            ["1.4", "number"],
            ["1.6", "number"],
            ["1.8", "number"],
            ["2.0", "number"],
            ["2.2", "number"],
            ["2.4", "number"],
            ["2.6", "number"],
            ["2.8", "number"],
          ],
        },
        style: {
          origin: [0, 0, 0],
          dimensions: {
            width: 20,
            height: 10,
            depth: 10,
          },
        },
        mark: {
          position: {
            x: {
              scaleType: "ordinal",
              domain: [
                "-3",
                "-2.8",
                "-2.6",
                "-2.4",
                "-2.2",
                "-2.0",
                "-1.8",
                "-1.6",
                "-1.4",
                "-1.2",
                "-1.0",
                "-0.8",
                "-0.6",
                "-0.4",
                "-0.2",
                "0.0",
                "0.2",
                "0.4",
                "0.6",
                "0.8",
                "1.0",
                "1.2",
                "1.4",
                "1.6",
                "1.8",
                "2.0",
                "2.2",
                "2.4",
                "2.6",
                "2.8",
              ],
            },
            z: {
              scaleType: "ordinal",
              field: "x",
            },
          },
          style: {
            stroke: {
              color: "#666",
              width: 1,
            },
            fill: {
              color: "#b71c1c",
              opacity: 0.1,
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

WaterfallPlot.story = {
  parameters: {
    notes: { markdown },
  },
};
