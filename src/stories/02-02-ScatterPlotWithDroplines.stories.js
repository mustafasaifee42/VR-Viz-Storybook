import React from "react";

import VRViz from "vr-viz";

import markdown from "../ReadMe/Charts/ScatterPlot.md";

const Title = {
  title: "Graphs or Charts/Scatter Plot/Scatter Plot With Droplines",
};

export default Title;

export const ScatterPlotWithDroplines = () => (
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
        position: "5 5 15",
        rotation: "0 0 0",
      },
      reloadPageOnExitVR: true,
    }}
    graph={[
      {
        type: "ScatterPlot",
        style: {
          origin: [0, 0, 0],
          dimensions: {
            width: 10,
            height: 10,
            depth: 10,
          },
        },
        data: {
          dataFile: "data/scatterPlot.csv",
          fileType: "csv",
          fieldDesc: [
            ["sepal_length", "number"],
            ["sepal_width", "number"],
            ["petal_length", "number"],
            ["petal_width", "number"],
            ["species", "text"],
          ],
        },
        mark: {
          position: {
            x: {
              field: "sepal_length",
            },
            y: {
              field: "sepal_width",
            },
            z: {
              field: "petal_length",
            },
          },
          type: "sphere",
          style: {
            radius: {
              scaleType: "linear",
              field: "petal_width",
              value: [0, 0.5],
              startFromZero: true,
            },
            fill: {
              scaleType: "ordinal",
              opacity: 0.9,
              field: "species",
              color: ["#db4877", "#0F9D58", "#4285F4"],
              domain: ["setosa", "versicolor", "virginica"],
            },
          },
          droplines: {
            xz: true,
            yz: false,
            xy: false,
          },
          projections: {
            xz: false,
            yz: false,
            xy: false,
          },
        },
        axis: {
          "axis-box": {
            color: "white",
          },
          "x-axis": {
            orient: "back-bottom",
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
            orient: "back-left",
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

ScatterPlotWithDroplines.story = {
  parameters: {
    notes: { markdown },
  },
};
