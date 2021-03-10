import React from "react";

import VRViz from "vr-viz";

const Title = {
  title: "Dashboard/Dashboard",
};

export default Title;

export const Dashboard = () => (
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
        position: "10.5 5.5 11",
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
          rotation: "0 0 0",
          dimensions: {
            width: 10,
            height: 5,
            depth: 10,
          },
        },
        mark: {
          type: "cone",
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
              color: ["#DB4437", "#0f9d58"],
            },
          },
        },
        axis: {
          "axis-box": {
            color: "black",
          },
          "x-axis": {
            orient: "bottom-back",
            ticks: {
              noOfTicks: 10,
              size: 0.01,
              color: "black",
              opacity: 1,
              fontSize: 3,
            },
            grid: {
              color: "black",
              opacity: 1,
            },
          },
          "y-axis": {
            orient: "bottom-back",
            ticks: {
              noOfTicks: 10,
              size: 0.01,
              color: "black",
              opacity: 1,
              fontSize: 3,
            },
            grid: {
              color: "black",
              opacity: 1,
            },
          },
          "z-axis": {
            orient: "bottom-back",
            ticks: {
              noOfTicks: 10,
              size: 0.01,
              color: "black",
              opacity: 1,
              fontSize: 3,
            },
            grid: {
              color: "black",
              opacity: 1,
            },
          },
        },
      },
      {
        type: "SurfacePlot",
        style: {
          origin: [0, 6, 0],
          dimensions: {
            width: 10,
            height: 5,
            depth: 10,
          },
        },
        mark: {
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
              function: (x, z) => x * z,
              color: ["#DB4437", "#0f9d58"],
              opacity: 1,
            },
          },
        },
        axis: {
          "axis-box": {
            color: "black",
          },
          "x-axis": {
            orient: "bottom-back",
            ticks: {
              noOfTicks: 10,
              size: 0.01,
              color: "black",
              opacity: 1,
              fontSize: 3,
            },
            grid: {
              color: "black",
              opacity: 1,
            },
          },
          "y-axis": {
            orient: "bottom-back",
            ticks: {
              noOfTicks: 10,
              size: 0.01,
              color: "black",
              opacity: 1,
              fontSize: 3,
            },
            grid: {
              color: "black",
              opacity: 1,
            },
          },
          "z-axis": {
            orient: "bottom-back",
            ticks: {
              noOfTicks: 10,
              size: 0.01,
              color: "black",
              opacity: 1,
              fontSize: 3,
            },
            grid: {
              color: "black",
              opacity: 1,
            },
          },
        },
      },
      {
        type: "ScatterPlot",
        style: {
          origin: [11, 0, 0],
          dimensions: {
            width: 10,
            height: 11,
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
              startFromZero: true,
              value: [0, 0.2],
            },
            fill: {
              scaleType: "ordinal",
              opacity: 0.4,
              field: "species",
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
            yz: true,
            xy: true,
          },
        },
        axis: {
          "axis-box": {
            color: "black",
          },
          "x-axis": {
            orient: "bottom-back",
            ticks: {
              noOfTicks: 10,
              size: 0.01,
              color: "black",
              opacity: 1,
              fontSize: 3,
            },
            grid: {
              color: "black",
              opacity: 1,
            },
          },
          "y-axis": {
            orient: "bottom-back",
            ticks: {
              noOfTicks: 10,
              size: 0.01,
              color: "black",
              opacity: 1,
              fontSize: 3,
            },
            grid: {
              color: "black",
              opacity: 1,
            },
          },
          "z-axis": {
            orient: "bottom-back",
            ticks: {
              noOfTicks: 10,
              size: 0.01,
              color: "black",
              opacity: 1,
              fontSize: 3,
            },
            grid: {
              color: "black",
              opacity: 1,
            },
          },
        },
      },
    ]}
  />
);
