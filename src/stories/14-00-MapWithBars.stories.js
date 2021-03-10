import React from "react";

import VRViz from "vr-viz";

import markdown from "../ReadMe/Maps/MapBarChart.md";

import sfMapData from "../mapData/sfMapData.json";

const Title = {
  title: "Maps/Map With Bargraph/Map With Bargraph",
};

export default Title;

export const MapWithBargraph = () => (
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
        position: "0 0 0",
        rotation: "0 0 0",
      },
      reloadPageOnExitVR: true,
    }}
    graph={[
      {
        type: "MapBarChart",
        data: {
          dataFile: "data/noOfTrees.csv",
          fileType: "csv",
          fieldDesc: [
            ["latitude", "number"],
            ["longitude", "number"],
            ["value", "number"],
          ],
        },
        style: {
          origin: [0, 0, 0],
        },
        mark: {
          mapScale: 2500,
          mapOrigin: [5344, 1783],
          rotation: "-90 0 0",
          map: {
            data: sfMapData,
            projection: "Mercator",
            shapeIdentifier: "id",
            shapeKey: "neighbourhood",
            style: {
              extrusion: 0.0000001,
              fill: {
                color: "#fff",
                opacity: 1,
              },
              stroke: {
                width: 1,
                color: "#555",
              },
            },
          },
          bars: {
            type: "cone",
            style: {
              radius: 0.02,
              height: {
                scaleType: "linear",
                field: "value",
                value: [0, 1],
                startFromZero: true,
              },
              fill: {
                scaleType: "linear",
                opacity: 0.9,
                field: "value",
                color: ["#ea4335", "#34a853"],
              },
            },
          },
        },
      },
    ]}
  />
);

MapWithBargraph.story = {
  parameters: {
    notes: { markdown },
  },
};
