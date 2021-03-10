import React from "react";

import VRViz from "vr-viz";

import markdown from "../ReadMe/Maps/PrismMap.md";

import mapData from "../mapData/mapData.json";

const Title = {
  title: "Maps/Prism Map",
};

export default Title;

export const PrismMap = () => (
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
        position: "5 5 20",
        rotation: "0 0 0",
      },
      reloadPageOnExitVR: true,
    }}
    graph={[
      {
        type: "PrismMap",
        data: {
          dataFile: "data/prismMapData.csv",
          fileType: "csv",
          fieldDesc: [
            ["id", "text"],
            ["value", "number"],
            ["colorValue", "number"],
          ],
        },
        style: {
          origin: [0, 0, 0],
        },
        mark: {
          mapScale: 20,
          mapOrigin: [5, 5],
          rotation: "-45 0 0",
          data: mapData,
          projection: "Mercator",
          shapeIdentifier: "id",
          shapeKey: "countries",
          style: {
            extrusion: {
              field: "value",
              value: [0, 5],
            },
            fill: {
              scaleType: "ordinal",
              opacity: 0.9,
              field: "colorValue",
              color: [
                "#1b9e77",
                "#d95f02",
                "#7570b3",
                "#e7298a",
                "#66a61e",
                "#e6ab02",
              ],
            },
            stroke: {
              width: 1,
              color: "white",
            },
          },
        },
      },
    ]}
  />
);

PrismMap.story = {
  parameters: {
    notes: { markdown },
  },
};
