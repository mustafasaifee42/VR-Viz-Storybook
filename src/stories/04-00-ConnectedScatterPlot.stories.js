import React from "react";

import VRViz from "vr-viz";

import markdown from "../ReadMe/Charts/ConnectedScatterPlot.md";

const Title = {
  title: "Graphs or Charts/Connected Scatter Plot",
};

export default Title;

export const ConnectedScatterPlot = () => (
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
        position: "10 3 15",
        rotation: "0 0 0",
      },
      reloadPageOnExitVR: true,
    }}
    graph={[
      {
        type: "ConnectedScatterPlot",
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
            width: 20,
            height: 10,
            depth: 10,
          },
        },
        mark: {
          position: {
            x: {
              field: "miles",
            },
            y: {
              field: "gas",
            },
            z: {
              field: "emission",
            },
          },
          points: {
            type: "sphere",
            style: {
              radius: {
                value: 0.05,
              },
              fill: {
                opacity: 0.7,
                color: "#b71c1c",
              },
            },
            mouseOver: {
              focusedObject: {
                opacity: 1,
              },
              nonFocusedObject: {
                opacity: 0.7,
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
          line: {
            style: {
              stroke: {
                color: "white",
                opacity: 1,
              },
            },
          },
          label: {
            field: "Year",
            style: {
              color: "white",
              fontSize: 2,
              opacity: 0.7,
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

ConnectedScatterPlot.story = {
  parameters: {
    notes: { markdown },
  },
};
