import React from "react";

import VRViz from "vr-viz";

import markdown from "../ReadMe/Diagrams/ForceDirectedGraph.md";

const Title = {
  title: "Diagrams/Network Graph/Force Directed Graph",
};

export default Title;

export const ForceDirectedGraph = () => (
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
        position: "0 5 10",
        rotation: "0 0 0",
      },
      reloadPageOnExitVR: true,
    }}
    graph={[
      {
        type: "ForceDirectedGraph",
        data: {
          dataFile: "data/ForceDirectedGraph.json",
          fileType: "json",
        },
        style: {
          origin: [0, 0, 0],
          scale: 0.2,
        },
        mark: {
          nodes: {
            type: "sphere",
            style: {
              radius: {
                value: 0.25,
              },
              fill: {
                scaleType: "ordinal",
                opacity: 1,
                field: "group",
              },
            },
          },
          links: {
            type: "line",
            style: {
              fill: {
                opacity: {
                  value: 0.3,
                },
                color: "white",
              },
            },
          },
          labels: {
            field: "id",
            style: {
              color: "white",
              opacity: 1,
              fontSize: 3,
              padding: 0.1,
            },
          },
        },
      },
    ]}
  />
);

ForceDirectedGraph.story = {
  parameters: {
    notes: { markdown },
  },
};
