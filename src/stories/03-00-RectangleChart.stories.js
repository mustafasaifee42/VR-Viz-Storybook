import React from "react";

import VRViz from "vr-viz";

import markdown from "../ReadMe/Charts/RectangleChart.md";

const Title = {
  title: "Graphs or Charts/Rectangle Chart",
};

export default Title;

export const RectangleChart = () => (
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
        type: "RectangleChart",
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
            width: 25,
            height: 10,
            depth: 10,
          },
        },
        mark: {
          position: {
            x: {
              field: "Year",
            },
          },
          type: "box",
          style: {
            depth: {
              field: "miles",
              startFromZero: true,
            },
            height: {
              field: "gas",
              startFromZero: true,
            },
            fill: {
              opacity: 0.9,
              scaleType: "linear",
              field: "emission",
              color: ["#b71c1c", "#2196f3"],
            },
          },
          mouseOver: {
            focusedObject: {
              opacity: 1,
            },
            nonFocusedObject: {
              opacity: 0.2,
            },
            label: {
              value: (d) =>
                `Year: ${d.Year}\nMiles: ${d.miles}\nGas: ${d.gas}\nEmmision: ${d.emission}`,
              align: "center",
              width: 0.5,
              height: 0.35,
              wrapCount: 100,
              lineHeight: 75,
              backgroundColor: "#fff",
              backgroundOpacity: 0.9,
              fontColor: "#333",
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

RectangleChart.story = {
  parameters: {
    notes: { markdown },
  },
};
