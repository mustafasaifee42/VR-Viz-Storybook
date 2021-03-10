import React from "react";

import VRViz from "vr-viz";

import markdown from "../ReadMe/Maps/FlowMap.md";

import mapData from "../mapData/mapData.json";

const Title = {
  title: "Maps/Flow Maps/Flow Map",
};

export default Title;

export const FlowMap = () => (
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
        type: "FlowMap",
        data: {
          dataFile: "data/data8.csv",
          fileType: "csv",
          fieldDesc: [
            ["source_latitude", "number"],
            ["source_longitude", "number"],
            ["target_latitude", "number"],
            ["target_longitude", "number"],
          ],
        },
        style: {
          origin: [0, 0, 0],
        },
        mark: {
          mapScale: 20,
          mapOrigin: [5, 5],
          rotation: "-90 0 0",
          map: {
            data: mapData,
            projection: "Mercator",
            shapeIdentifier: "id",
            shapeKey: "countries",
            style: {
              extrusion: 0.000001,
              fill: {
                color: "#111",
                opacity: 1,
              },
              stroke: {
                width: 1,
                color: "#444",
              },
            },
          },
          flowlines: {
            style: {
              opacity: 0.4,
              stroke: {
                color: "#2196f3",
              },
            },
          },
          nodes: {
            source: {
              type: "sphere",
              style: {
                radius: {
                  value: 0.05,
                },
                fill: {
                  color: "#b71c1c",
                  opacity: 0.5,
                },
              },
            },
            target: {
              type: "sphere",
              style: {
                radius: {
                  value: 0.05,
                },
                fill: {
                  color: "#0f9d5b",
                  opacity: 0.5,
                },
              },
            },
          },
        },
      },
    ]}
  />
);

FlowMap.story = {
  parameters: {
    notes: { markdown },
  },
};
