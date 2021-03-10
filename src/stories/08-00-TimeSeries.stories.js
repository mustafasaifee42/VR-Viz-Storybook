import React from "react";

import VRViz from "vr-viz";

import markdown from "../ReadMe/Charts/TimeSeries.md";

const Title = {
  title: "Graphs or Charts/Time Series",
};

export default Title;

export const TimeSeries = () => (
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
        position: "5 5 12",
        rotation: "0 0 0",
      },
      reloadPageOnExitVR: true,
    }}
    graph={[
      {
        type: "TimeSeries",
        data: {
          dataFile: "data/data3.csv",
          fileType: "csv",
          fieldDesc: [
            ["Year", "text"],
            ["miles", "number"],
            ["gas", "number"],
            ["emission", "number"],
          ],
        },
        style: {
          origin: [0, 0, 0],
          dimensions: {
            width: 15,
            height: 10,
            depth: 10,
          },
        },
        mark: {
          type: "plane",
          position: {
            x: {
              scaleType: "ordinal",
              field: "Year",
            },
            y: {
              field: "miles",
              startFromZero: true,
            },
            z: {
              field: "gas",
              startFromZero: true,
            },
          },
          style: {
            fill: {
              color: "#CD363E",
              opacity: 0.8,
            },
            stroke: {
              width: 1,
              color: "white",
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

TimeSeries.story = {
  parameters: {
    notes: { markdown },
  },
};
