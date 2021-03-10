import React from "react";

import VRViz from "vr-viz";

import markdown from "../ReadMe/Maps/IsolineMap.md";

import sfMapData from "../mapData/sfMapData.json";

const Title = {
  title: "Maps/Isoline Map",
};

export default Title;

export const IsolineMap = () => (
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
        type: "IsolineMap",
        style: {
          origin: [0, 0, 0],
        },
        data: {
          dataFile: "data/mapContourLines.csv",
          fileType: "csv",
          fieldDesc: [
            ["geojson", "jsonObject"],
            ["objectid", "number"],
            ["isoline_ty", "text"],
            ["shape_len", "text"],
            ["elevation", "number"],
          ],
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
          isoLines: {
            elevation: {
              field: "elevation",
              value: [0, 2],
            },
            style: {
              stroke: {
                width: 1,
                scaleType: "linear",
                field: "elevation",
                color: ["#b71c1c", "#2196f3"],
              },
            },
          },
        },
      },
    ]}
  />
);

IsolineMap.story = {
  parameters: {
    notes: { markdown },
  },
};
