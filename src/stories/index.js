import React from 'react';
import ReactGA from 'react-ga';

import { setAddon, storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withStorySource } from '@storybook/addon-storysource'

import { Button, Welcome } from '@storybook/react/demo';
import { withReadme, withDocs } from 'storybook-readme';

import VRViz from 'vr-viz';
import mapData from '../mapData/mapData.json';
import sfMapData from '../mapData/sfMapData.json';
import JSXAddon from 'storybook-addon-jsx';
import BarGraph from '../ReadMe/BarGraph.md';
import StackedBarGraph from '../ReadMe/StackedBarGraph.md';
import ScatterPlot from '../ReadMe/ScatterPlot.md';
import PrismMap from '../ReadMe/PrismMap.md';
import FlowMap from '../ReadMe/FlowMap.md';
import MapTimeBars from '../ReadMe/MapTimeBars.md';
import MapBarChart from '../ReadMe/MapBarChart.md';
import MapStackedBarChart from '../ReadMe/MapStackedBarChart.md';
import MapWithIsoLines from '../ReadMe/MapWithIsoLines.md';
import SurfacePlot from '../ReadMe/SurfacePlot.md';
import ParametricSurfacePlot from '../ReadMe/ParametricSurfacePlot.md';
import ContourPlot from '../ReadMe/ContourPlot.md';
import ParametricCurvePlot from '../ReadMe/ParametricCurvePlot.md';
import ContourMap from '../ReadMe/ContourMap.md';
import ForceDirectedGraph from '../ReadMe/ForceDirectedGraph.md';
import MeshPlot from '../ReadMe/MeshPlot.md';
import WaterFallPlot from '../ReadMe/WaterFallPlot.md';
import RectangleChart from '../ReadMe/RectangleChart.md';
import PointCloud from '../ReadMe/PointCloud.md';
import ConnectedScatterPlot from '../ReadMe/ConnectedScatterPlot.md';
import TreeMap from '../ReadMe/TreeMap.md';
import TimeSeries from '../ReadMe/TimeSeries.md';
import CrossSectionView from '../ReadMe/CrossSectionView.md';
import SpiralPlot from '../ReadMe/SpiralPlot.md';
import README from '../ReadMe/README.md';
import coverImg from "../imgs/CoverImage.png";
setAddon(JSXAddon);


ReactGA.initialize('UA-145184614-1');
ReactGA.set({ anonymizeIp: true });
ReactGA.pageview('/');

const cover = {
  width: "100%",
  height: "400px",
  backgroundImage: `url(${coverImg})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'contain',
};

storiesOf('VR-Viz', module)
  .add('Introduction', withDocs(README, () =>
    <section style={cover} />
  ))
storiesOf('BarChart', module)
  .addWithJSX('Box BarChart', withReadme(BarGraph, () =>
    <VRViz
      scene={
        {
          'sky': {
            'style': {
              'color': '#333',
              'texture': false,
            }
          },
          'lights': [
            {
              'type': 'directional',
              'color': '#fff',
              'position': '0 1 1',
              'intensity': 1,
              'decay': 1,
            },
            {
              'type': 'ambient',
              'color': '#fff',
              'intensity': 1,
              'decay': 1,
            }
          ],
          'camera': {
            'position': '10 0 20',
            'rotation': '0 0 0',
          },
          'reloadPageOnExitVR':true
        }
      }
      graph={
        [
          {
            'type': 'BarGraph',
            'data': {
              'dataFile': 'data/data1.csv',
              'fileType': 'csv',
              'fieldDesc': [['x', 'text'], ['z', 'text'], ['height', 'number']]
            },
            'style': {
              'origin': [0, 0, 0],
              'dimensions': {
                'width': 20,
                'height': 5,
                'depth': 10,
              },
            },
            'mark': {
              'type': 'box',
              'position': {
                'x': {
                  'scaleType': 'ordinal',
                  'field': 'x',
                },
                'z': {
                  'scaleType': 'ordinal',
                  'field': 'z',
                }
              },
              'style': {
                'padding': {
                  'x': 0.1,
                  'z': 0.1,
                },
                'height': {
                  'scaleType': 'linear',
                  'startFromZero': true,
                  'field': 'height',
                },
                'fill': {
                  'opacity': 0.8,
                  'scaleType': 'linear',
                  'field': 'height',
                  'color': ['#b71c1c', '#2196f3'],
                },
              },
            },
            'axis': {
              'x-axis': {
                'orient': 'back-bottom',
                'title': {
                  'value': '',
                  'fontSize': 3,
                  'color': 'white',
                  'opacity': 0.7,
                },
                'ticks': {
                  'noOfTicks': 10,
                  'size': 0.01,
                  'color': 'white',
                  'opacity': 0.7,
                  'fontSize': 3,
                },
                'grid': {
                  'color': 'white',
                  'opacity': 0.7,
                }
              },
              'y-axis': {
                'orient': 'back-left',
                'title': {
                  'value': '',
                  'fontSize': 3,
                  'color': 'white',
                  'opacity': 0.7,
                },
                'ticks': {
                  'noOfTicks': 10,
                  'size': 0.01,
                  'color': 'white',
                  'opacity': 0.7,
                  'fontSize': 3,
                },
                'grid': {
                  'color': 'white',
                  'opacity': 0.7,
                }
              },
              'z-axis': {
                'orient': 'bottom-left',
                'title': {
                  'value': '',
                  'fontSize': 3,
                  'color': 'white',
                  'opacity': 0.7,
                },
                'ticks': {
                  'noOfTicks': 10,
                  'size': 0.01,
                  'color': 'white',
                  'opacity': 0.7,
                  'fontSize': 3,
                },
                'grid': {
                  'color': 'white',
                  'opacity': 0.7,
                }
              }
            }
          }
        ]
      }
    />
  ))
  .addWithJSX('Box BarChart With Hover', withReadme(BarGraph, () =>
    <VRViz
      scene={
        {
          'sky': {
            'style': {
              'color': '#333',
              'texture': false,
            }
          },
          'lights': [
            {
              'type': 'directional',
              'color': '#fff',
              'position': '0 1 1',
              'intensity': 1,
              'decay': 1,
            },
            {
              'type': 'ambient',
              'color': '#fff',
              'intensity': 1,
              'decay': 1,
            }
          ],
          'camera': {
            'position': '10 0 20',
            'rotation': '0 0 0',
          },
          'reloadPageOnExitVR':true
        }
      }
      graph={
        [
          {
            'type': 'BarGraph',
            'data': {
              'dataFile': 'data/data1.csv',
              'fileType': 'csv',
              'fieldDesc': [['x', 'text'], ['z', 'text'], ['height', 'number']]
            },
            'style': {
              'origin': [0, 0, 0],
              'dimensions': {
                'width': 20,
                'height': 5,
                'depth': 10,
              },
            },
            'mark': {
              'type': 'box',
              'position': {
                'x': {
                  'scaleType': 'ordinal',
                  'field': 'x',
                },
                'z': {
                  'scaleType': 'ordinal',
                  'field': 'z',
                }
              },
              'style': {
                'padding': {
                  'x': 0.1,
                  'z': 0.1,
                },
                'height': {
                  'scaleType': 'linear',
                  'startFromZero': true,
                  'field': 'height',
                },
                'fill': {
                  'opacity': 0.8,
                  'scaleType': 'linear',
                  'field': 'height',
                  'color': ['#b71c1c', '#2196f3'],
                },
              },
              'mouseOver': {
                'focusedObject': {
                  'opacity': 1,
                },
                'nonFocusedObject': {
                  'opacity': 0.2,
                },
                'label': {
                  'value': (d) => `x:${d.x}\nz:${d.z}\nheight:${d.height}`,
                  'align': 'center',
                  'width': 0.5,
                  'height': 0.15,
                  'wrapCount': 100,
                  'lineHeight': 50,
                  'backgroundColor': '#fff',
                  'backgroundOpacity': 0.9,
                  'fontColor': '#333',
                }
              }
            },
            'axis': {
              'x-axis': {
                'orient': 'back-bottom',
                'title': {
                  'value': '',
                  'fontSize': 3,
                  'color': 'white',
                  'opacity': 0.7,
                },
                'ticks': {
                  'noOfTicks': 10,
                  'size': 0.01,
                  'color': 'white',
                  'opacity': 0.7,
                  'fontSize': 3,
                },
                'grid': {
                  'color': 'white',
                  'opacity': 0.7,
                }
              },
              'y-axis': {
                'orient': 'back-left',
                'title': {
                  'value': '',
                  'fontSize': 3,
                  'color': 'white',
                  'opacity': 0.7,
                },
                'ticks': {
                  'noOfTicks': 10,
                  'size': 0.01,
                  'color': 'white',
                  'opacity': 0.7,
                  'fontSize': 3,
                },
                'grid': {
                  'color': 'white',
                  'opacity': 0.7,
                }
              },
              'z-axis': {
                'orient': 'bottom-left',
                'title': {
                  'value': '',
                  'fontSize': 3,
                  'color': 'white',
                  'opacity': 0.7,
                },
                'ticks': {
                  'noOfTicks': 10,
                  'size': 0.01,
                  'color': 'white',
                  'opacity': 0.7,
                  'fontSize': 3,
                },
                'grid': {
                  'color': 'white',
                  'opacity': 0.7,
                }
              }
            }
          }
        ]
      }
    />
  ))
  .addWithJSX('Cone BarChart', withReadme(BarGraph, () =>
    <VRViz
      scene={
        {
          'sky': {
            'style': {
              'color': '#333',
              'texture': false,
            }
          },
          'lights': [
            {
              'type': 'directional',
              'color': '#fff',
              'position': '0 1 1',
              'intensity': 1,
              "decay": 1,
            },
            {
              'type': 'ambient',
              'color': '#fff',
              'intensity': 1,
              "decay": 1,
            }
          ],
          'camera': {
            'position': '10 0 20',
            'rotation': '0 0 0',
          },
          'reloadPageOnExitVR':true
        }
      }
      graph={
        [
          {
            'type': 'BarGraph',
            'data': {
              'dataFile': "data/data1.csv",
              'fileType': 'csv',
              'fieldDesc': [['x', 'text'], ['z', 'text'], ['height', 'number']]
            },
            'style': {
              'origin': [0, 0, 0],
              'dimensions': {
                'width': 20,
                'height': 5,
                'depth': 10,
              },
            },
            'mark': {
              'type': 'cone',
              'position': {
                'x': {
                  'scaleType': 'ordinal',
                  'field': 'x',
                },
                'z': {
                  'scaleType': 'ordinal',
                  'field': 'z',
                }
              },
              'style': {
                'padding': {
                  'x': 0.1,
                  'z': 0.1,
                },
                'height': {
                  'scaleType': 'linear',
                  'startFromZero': true,
                  'field': 'height',
                },
                'fill': {
                  'opacity': 0.8,
                  'scaleType': 'linear',
                  'field': 'height',
                  'color': ['#b71c1c', '#2196f3'],
                },
              }
            },
            'axis': {
              'x-axis': {
                'orient': 'back-bottom',
                'title': {
                  'value': '',
                  'fontSize': 3,
                  'color': 'white',
                  'opacity': 0.7,
                },
                'ticks': {
                  'noOfTicks': 10,
                  'size': 0.01,
                  'color': 'white',
                  'opacity': 0.7,
                  'fontSize': 3,
                },
                'grid': {
                  'color': 'white',
                  'opacity': 0.7,
                }
              },
              'y-axis': {
                'orient': 'back-left',
                'title': {
                  'value': '',
                  'fontSize': 3,
                  'color': 'white',
                  'opacity': 0.7,
                },
                'ticks': {
                  'noOfTicks': 10,
                  'size': 0.01,
                  'color': 'white',
                  'opacity': 0.7,
                  'fontSize': 3,
                },
                'grid': {
                  'color': 'white',
                  'opacity': 0.7,
                }
              },
              'z-axis': {
                'orient': 'bottom-left',
                'title': {
                  'value': '',
                  'fontSize': 3,
                  'color': 'white',
                  'opacity': 0.7,
                },
                'ticks': {
                  'noOfTicks': 10,
                  'size': 0.01,
                  'color': 'white',
                  'opacity': 0.7,
                  'fontSize': 3,
                },
                'grid': {
                  'color': 'white',
                  'opacity': 0.7,
                }
              }
            }
          }
        ]
      }
    />
  ))
  .addWithJSX('Cylinder BarChart', withReadme(BarGraph, () =>
    <VRViz
      scene={
        {
          'sky': {
            'style': {
              'color': '#333',
              'texture': false,
            }
          },
          'lights': [
            {
              'type': 'directional',
              'color': '#fff',
              'position': '0 1 1',
              'intensity': 1,
              "decay": 1,
            },
            {
              'type': 'ambient',
              'color': '#fff',
              'intensity': 1,
              "decay": 1,
            }
          ],
          'camera': {
            'position': '10 0 20',
            'rotation': '0 0 0',
          },
          'reloadPageOnExitVR':true
        }
      }
      graph={
        [
          {
            'type': 'BarGraph',
            'data': {
              'dataFile': "data/data1.csv",
              'fileType': 'csv',
              'fieldDesc': [['x', 'text'], ['z', 'text'], ['height', 'number']]
            },
            'style': {
              'origin': [0, 0, 0],
              'dimensions': {
                'width': 20,
                'height': 5,
                'depth': 10,
              },
            },
            'mark': {
              'type': 'cylinder',
              'position': {
                'x': {
                  'scaleType': 'ordinal',
                  'field': 'x',
                },
                'z': {
                  'scaleType': 'ordinal',
                  'field': 'z',
                }
              },
              'style': {
                'padding': {
                  'x': 0.1,
                  'z': 0.1,
                },
                'height': {
                  'scaleType': 'linear',
                  'startFromZero': true,
                  'field': 'height',
                },
                'fill': {
                  'opacity': 0.8,
                  'scaleType': 'linear',
                  'field': 'height',
                  'color': ['#b71c1c', '#2196f3'],
                },
              }
            },
            'axis': {
              'x-axis': {
                'orient': 'back-bottom',
                'title': {
                  'value': '',
                  'fontSize': 3,
                  'color': 'white',
                  'opacity': 0.7,
                },
                'ticks': {
                  'noOfTicks': 10,
                  'size': 0.01,
                  'color': 'white',
                  'opacity': 0.7,
                  'fontSize': 3,
                },
                'grid': {
                  'color': 'white',
                  'opacity': 0.7,
                }
              },
              'y-axis': {
                'orient': 'back-left',
                'title': {
                  'value': '',
                  'fontSize': 3,
                  'color': 'white',
                  'opacity': 0.7,
                },
                'ticks': {
                  'noOfTicks': 10,
                  'size': 0.01,
                  'color': 'white',
                  'opacity': 0.7,
                  'fontSize': 3,
                },
                'grid': {
                  'color': 'white',
                  'opacity': 0.7,
                }
              },
              'z-axis': {
                'orient': 'bottom-left',
                'title': {
                  'value': '',
                  'fontSize': 3,
                  'color': 'white',
                  'opacity': 0.7,
                },
                'ticks': {
                  'noOfTicks': 10,
                  'size': 0.01,
                  'color': 'white',
                  'opacity': 0.7,
                  'fontSize': 3,
                },
                'grid': {
                  'color': 'white',
                  'opacity': 0.7,
                }
              }
            }
          }
        ]
      }
    />
  ))
  .addWithJSX('Stacked BarChart', withReadme(StackedBarGraph, () =>
    <VRViz
      scene={
        {
          'sky': {
            'style': {
              'color': '#333',
              'texture': false,
            }
          },
          'lights': [
            {
              'type': 'directional',
              'color': '#fff',
              'position': '0 1 1',
              'intensity': 1,
              "decay": 1,
            },
            {
              'type': 'ambient',
              'color': '#fff',
              'intensity': 1,
              "decay": 1,
            }
          ],
          'camera': {
            'position': '10 5 25',
            'rotation': '0 0 0',
          },
          'reloadPageOnExitVR':true
        }
      }
      graph={
        [
          {
            'type': 'StackedBarGraph',
            'data': {
              'dataFile': "data/data2.csv",
              'fileType': 'csv',
              'fieldDesc': [['LOCATION', 'text'], ['TIME', 'text'], ['AGR', 'number'], ['INDUSTRY', 'number']]
            },
            'style': {
              'origin': [0, 0, 0],
              'dimensions': {
                'width': 30,
                'height': 20,
                'depth': 20,
              },
            },
            'mark': {
              'type': 'box',
              'position': {
                'x': {
                  'scaleType': 'ordinal',
                  'field': 'LOCATION',
                },
                'z': {
                  'scaleType': 'ordinal',
                  'field': 'TIME',
                }
              },
              'style': {
                'padding': {
                  'x': 0.6,
                  'z': 0.6,
                },
                'height': {
                  'scaleType': 'linear',
                  'field': ['AGR', 'INDUSTRY'],
                  'startFromZero': true,
                },
                'fill': {
                  'scaleType': 'ordinal',
                  'opacity': 0.8,
                  'color': ['#b71c1c', '#2196f3'],
                  'field': ['AGR', 'INDUSTRY'],
                },
              }
            },
            'axis': {
              'x-axis': {
                'orient': 'front-bottom',
                'title': {
                  'value': '',
                  'fontSize': 3,
                  'color': 'white',
                  'opacity': 0.7,
                },
                'ticks': {
                  'noOfTicks': 10,
                  'size': 0.01,
                  'color': 'white',
                  'opacity': 0.7,
                  'fontSize': 3,
                },
                'grid': {
                  'color': 'white',
                  'opacity': 0.7,
                }
              },
              'y-axis': {
                'orient': 'front-left',
                'title': {
                  'value': '',
                  'fontSize': 3,
                  'color': 'white',
                  'opacity': 0.7,
                },
                'ticks': {
                  'noOfTicks': 10,
                  'size': 0.01,
                  'color': 'white',
                  'opacity': 0.7,
                  'fontSize': 3,
                },
                'grid': {
                  'color': 'white',
                  'opacity': 0.7,
                }
              },
              'z-axis': {
                'title': {
                  'value': '',
                  'fontSize': 3,
                  'color': 'white',
                  'opacity': 0.7,
                },
                'ticks': {
                  'noOfTicks': 10,
                  'size': 0.01,
                  'color': 'white',
                  'opacity': 0.7,
                  'fontSize': 3,
                },
                'grid': {
                  'color': 'white',
                  'opacity': 0.7,
                }
              }
            }
          }
        ]
      }
    />
  ));

storiesOf('Scatter Plot', module)
  .addWithJSX('Scatter Plot With Hover', withReadme(ScatterPlot, () =>
    <VRViz
      scene={
        {
          'sky': {
            'style': {
              'color': '#333',
              'texture': false,
            }
          },
          'lights': [
            {
              'type': 'directional',
              'color': '#fff',
              'position': '0 1 1',
              'intensity': 1,
              "decay": 1,
            },
            {
              'type': 'ambient',
              'color': '#fff',
              'intensity': 1,
              "decay": 1,
            }
          ],
          'camera': {
            'position': '5 5 15',
            'rotation': '0 0 0',
          },
          'reloadPageOnExitVR':true
        }
      }
      graph={
        [
          {
            'type': 'ScatterPlot',
            'style': {
              'origin': [0, 0, 0],
              'dimensions': {
                'width': 10,
                'height': 10,
                'depth': 10,
              },
            },
            'data': {
              'dataFile': "data/scatterPlot.csv",
              'fileType': 'csv',
              'fieldDesc': [['sepal_length', 'number'], ['sepal_width', 'number'], ['petal_length', 'number'], ['petal_width', 'number'], ['species', 'text']]
            },
            'mark': {
              'position': {
                'x': {
                  'scaleType': 'linear',
                  'field': 'sepal_length',
                },
                'y': {
                  'scaleType': 'linear',
                  'field': 'sepal_width',
                },
                'z': {
                  'scaleType': 'linear',
                  'field': 'petal_length',
                }
              },
              'type': 'sphere',
              'style': {
                'radius': {
                  'scaleType': 'linear',
                  'field': 'petal_width',
                  'value': [0, 0.5],
                  'startFromZero': true,
                },
                'fill': {
                  'scaleType': 'ordinal',
                  'opacity': 0.9,
                  'field': 'species',
                  'color': ['#db4877', '#0F9D58', '#4285F4'],
                  'domain': ['setosa', 'versicolor', 'virginica'],
                },
              },
              'mouseOver': {
                'focusedObject': {
                  'opacity': 1,
                },
                'nonFocusedObject': {
                  'opacity': 0.2,
                },
                'label': {
                  'value': (d) => `Sepal Length:${d.sepal_length}\nSepal Width:${d.sepal_width}\nPetal Length:${d.petal_length}\nPetal Width:${d.petal_width}\nSpecies:${d.species}`,
                  'align': 'center',
                  'width': 1,
                  'height': 0.35,
                  'wrapCount': 50,
                  'lineHeight': 75,
                  'backgroundColor': '#fff',
                  'backgroundOpacity': 0.9,
                  'fontColor': '#333',
                }
              },
              'droplines': {
                'xz': false,
                'yz': false,
                'xy': false,
                'style': {
                  'fill': {
                    'scaleType': 'ordinal',
                    'field': 'species',
                    'color': ['#db4877', '#0F9D58', '#4285F4'],
                    'opacity': 0.4,
                    'domain': ['setosa', 'versicolor', 'virginica'],
                  },
                }
              },
              'projections': {
                'xz': false,
                'yz': false,
                'xy': false,
                'style': {
                  'fill': {
                    'scaleType': 'ordinal',
                    'field': 'species',
                    'color': ['red', 'green', 'blue'],
                    'opacity': 0.4,
                    'domain': ['setosa', 'versicolor', 'virginica'],
                  },
                  'radius': {
                    'scaleType': 'linear',
                    'field': 'petal_width',
                    'value': [0, 0.2],
                  },
                }
              }
            },
            'axis': {
              'axis-box': {
                'color': 'white',
              },
              'x-axis': {
                'orient': 'back-bottom',
                'title': {
                  'value': '',
                  'fontSize': 3,
                  'color': 'white',
                  'opacity': 0.3,
                },
                'ticks': {
                  'noOfTicks': 10,
                  'size': 0.01,
                  'color': 'white',
                  'opacity': 0.3,
                  'fontSize': 3,
                },
                'grid': {
                  'color': 'white',
                  'opacity': 0.3,
                }
              },
              'y-axis': {
                'orient': 'back-left',
                'title': {
                  'value': '',
                  'fontSize': 3,
                  'color': 'white',
                  'opacity': 0.3,
                },
                'ticks': {
                  'noOfTicks': 10,
                  'size': 0.01,
                  'color': 'white',
                  'opacity': 0.3,
                  'fontSize': 3,
                },
                'grid': {
                  'color': 'white',
                  'opacity': 0.3,
                }
              },
              'z-axis': {
                'title': {
                  'value': '',
                  'fontSize': 3,
                  'color': 'white',
                  'opacity': 0.3,
                },
                'ticks': {
                  'noOfTicks': 10,
                  'size': 0.01,
                  'color': 'white',
                  'opacity': 0.3,
                  'fontSize': 3,
                },
                'grid': {
                  'color': 'white',
                  'opacity': 0.3,
                }
              }
            }
          }
        ]
      }
    />
  ))
  .addWithJSX('Scatter Plot with Projections', withReadme(ScatterPlot, () =>
    <VRViz
      scene={
        {
          'sky': {
            'style': {
              'color': '#333',
              'texture': false,
            }
          },
          'lights': [
            {
              'type': 'directional',
              'color': '#fff',
              'position': '0 1 1',
              'intensity': 1,
              "decay": 1,
            },
            {
              'type': 'ambient',
              'color': '#fff',
              'intensity': 1,
              "decay": 1,
            }
          ],
          'camera': {
            'position': '5 5 15',
            'rotation': '0 0 0',
          },
          'reloadPageOnExitVR':true
        }
      }
      graph={
        [
          {
            'type': 'ScatterPlot',
            'style': {
              'origin': [10, 0, 0],
              'dimensions': {
                'width': 10,
                'height': 10,
                'depth': 10,
              },
            },
            'data': {
              'dataFile': "data/scatterPlot.csv",
              'fileType': 'csv',
              'fieldDesc': [['sepal_length', 'number'], ['sepal_width', 'number'], ['petal_length', 'number'], ['petal_width', 'number'], ['species', 'text']]
            },
            'mark': {
              'position': {
                'x': {
                  'scaleType': 'linear',
                  'field': 'sepal_length',
                },
                'y': {
                  'scaleType': 'linear',
                  'field': 'sepal_width',
                },
                'z': {
                  'scaleType': 'linear',
                  'field': 'petal_length',
                }
              },
              'type': 'sphere',
              'style': {
                'radius': {
                  'scaleType': 'linear',
                  'field': 'petal_width',
                  'value': [0, 0.2],
                  'startFromZero': true,
                },
                'fill': {
                  'scaleType': 'ordinal',
                  'opacity': 0.6,
                  'field': 'species',
                  'color': ['#db4877', '#0F9D58', '#4285F4'],
                  'domain': ['setosa', 'versicolor', 'virginica'],
                },
              },
              'droplines': {
                'xz': false,
                'yz': false,
                'xy': false,
                'style': {
                  'fill': {
                    'scaleType': 'ordinal',
                    'field': 'species',
                    'color': ['#db4877', '#0F9D58', '#4285F4'],
                    'opacity': 0.4,
                    'domain': ['setosa', 'versicolor', 'virginica'],
                  },
                }
              },
              'projections': {
                'xz': true,
                'yz': true,
                'xy': true,
                'style': {
                  'fill': {
                    'scaleType': 'ordinal',
                    'field': 'species',
                    'color': ['#db4877', '#0F9D58', '#4285F4'],
                    'opacity': 0.4,
                    'domain': ['setosa', 'versicolor', 'virginica'],
                  },
                  'radius': {
                    'scaleType': 'linear',
                    'field': 'petal_width',
                    'value': [0, 0.2],
                    'startFromZero': true,
                  },
                }
              }
            },
            'axis': {
              'axis-box': {
                'color': 'white',
              },
              'x-axis': {
                'orient': 'back-bottom',
                'title': {
                  'value': '',
                  'fontSize': 3,
                  'color': 'white',
                  'opacity': 0.3,
                },
                'ticks': {
                  'noOfTicks': 10,
                  'size': 0.01,
                  'color': 'white',
                  'opacity': 0.3,
                  'fontSize': 3,
                },
                'grid': {
                  'color': 'white',
                  'opacity': 0.3,
                }
              },
              'y-axis': {
                'orient': 'back-left',
                'title': {
                  'value': '',
                  'fontSize': 3,
                  'color': 'white',
                  'opacity': 0.3,
                },
                'ticks': {
                  'noOfTicks': 10,
                  'size': 0.01,
                  'color': 'white',
                  'opacity': 0.3,
                  'fontSize': 3,
                },
                'grid': {
                  'color': 'white',
                  'opacity': 0.3,
                }
              },
              'z-axis': {
                'title': {
                  'value': '',
                  'fontSize': 3,
                  'color': 'white',
                  'opacity': 0.3,
                },
                'ticks': {
                  'noOfTicks': 10,
                  'size': 0.01,
                  'color': 'white',
                  'opacity': 0.3,
                  'fontSize': 3,
                },
                'grid': {
                  'color': 'white',
                  'opacity': 0.3,
                }
              }
            }
          }
        ]
      }
    />
  ))
  .addWithJSX('Scatter Plot with Droplines', withReadme(ScatterPlot, () =>
    <VRViz
      scene={
        {
          'sky': {
            'style': {
              'color': '#333',
              'texture': false,
            }
          },
          'lights': [
            {
              'type': 'directional',
              'color': '#fff',
              'position': '0 1 1',
              'intensity': 1,
              "decay": 1,
            },
            {
              'type': 'ambient',
              'color': '#fff',
              'intensity': 1,
              "decay": 1,
            }
          ],
          'camera': {
            'position': '5 5 15',
            'rotation': '0 0 0',
          },
          'reloadPageOnExitVR':true
        }
      }
      graph={
        [
          {
            'type': 'ScatterPlot',
            'style': {
              'origin': [0, 0, 0],
              'dimensions': {
                'width': 10,
                'height': 10,
                'depth': 10,
              },
            },
            'data': {
              'dataFile': "data/scatterPlot.csv",
              'fileType': 'csv',
              'fieldDesc': [['sepal_length', 'number'], ['sepal_width', 'number'], ['petal_length', 'number'], ['petal_width', 'number'], ['species', 'text']]
            },
            'mark': {
              'position': {
                'x': {
                  'scaleType': 'linear',
                  'field': 'sepal_length',
                },
                'y': {
                  'scaleType': 'linear',
                  'field': 'sepal_width',
                },
                'z': {
                  'scaleType': 'linear',
                  'field': 'petal_length',
                }
              },
              'type': 'sphere',
              'style': {
                'radius': {
                  'scaleType': 'linear',
                  'field': 'petal_width',
                  'value': [0, 0.5],
                  'startFromZero': true,
                },
                'fill': {
                  'scaleType': 'ordinal',
                  'opacity': 0.9,
                  'field': 'species',
                  'color': ['#db4877', '#0F9D58', '#4285F4'],
                  'domain': ['setosa', 'versicolor', 'virginica'],
                },
              },
              'droplines': {
                'xz': true,
                'yz': false,
                'xy': false,
                'style': {
                  'fill': {
                    'scaleType': 'ordinal',
                    'field': 'species',
                    'color': ['#db4877', '#0F9D58', '#4285F4'],
                    'opacity': 0.4,
                    'domain': ['setosa', 'versicolor', 'virginica'],
                  },
                }
              },
              'projections': {
                'xz': false,
                'yz': false,
                'xy': false,
                'style': {
                  'fill': {
                    'scaleType': 'ordinal',
                    'field': 'species',
                    'color': ['red', 'green', 'blue'],
                    'opacity': 0.4,
                    'domain': ['setosa', 'versicolor', 'virginica'],
                  },
                  'radius': {
                    'scaleType': 'linear',
                    'field': 'petal_width',
                    'value': [0, 0.2],
                  },
                }
              }
            },
            'axis': {
              'axis-box': {
                'color': 'white',
              },
              'x-axis': {
                'orient': 'back-bottom',
                'title': {
                  'value': '',
                  'fontSize': 3,
                  'color': 'white',
                  'opacity': 0.3,
                },
                'ticks': {
                  'noOfTicks': 10,
                  'size': 0.01,
                  'color': 'white',
                  'opacity': 0.3,
                  'fontSize': 3,
                },
                'grid': {
                  'color': 'white',
                  'opacity': 0.3,
                }
              },
              'y-axis': {
                'orient': 'back-left',
                'title': {
                  'value': '',
                  'fontSize': 3,
                  'color': 'white',
                  'opacity': 0.3,
                },
                'ticks': {
                  'noOfTicks': 10,
                  'size': 0.01,
                  'color': 'white',
                  'opacity': 0.3,
                  'fontSize': 3,
                },
                'grid': {
                  'color': 'white',
                  'opacity': 0.3,
                }
              },
              'z-axis': {
                'title': {
                  'value': '',
                  'fontSize': 3,
                  'color': 'white',
                  'opacity': 0.3,
                },
                'ticks': {
                  'noOfTicks': 10,
                  'size': 0.01,
                  'color': 'white',
                  'opacity': 0.3,
                  'fontSize': 3,
                },
                'grid': {
                  'color': 'white',
                  'opacity': 0.3,
                }
              }
            }
          }
        ]
      }
    />
  ))

storiesOf('Maps', module)
  .addWithJSX('Prism Map', withReadme(PrismMap, () =>
    <VRViz
      scene={
        {
          'sky': {
            'style': {
              'color': '#333',
              'texture': false,
            }
          },
          'lights': [
            {
              'type': 'directional',
              'color': '#fff',
              'position': '0 1 1',
              'intensity': 1,
              "decay": 1,
            },
            {
              'type': 'ambient',
              'color': '#fff',
              'intensity': 1,
              "decay": 1,
            }
          ],
          'camera': {
            'position': '5 5 20',
            'rotation': '0 0 0',
          },
          'reloadPageOnExitVR':true
        }
      }
      graph={
        [
          {
            'type': 'PrismMap',
            'data': {
              'dataFile': "data/prismMapData.csv",
              'fileType': 'csv',
              'fieldDesc': [['id', 'text'], ['value', 'number'], ['colorValue', 'number']]
            },
            'style': {
              'origin': [0, 0, 0],
            },
            'mark': {
              'mapScale': 20,
              'mapOrigin': [5, 5],
              'rotation': '-45 0 0',
              'data': mapData,
              'projection': 'Mercator',
              'shapeIdentifier': 'id',
              'shapeKey': 'countries',
              'style': {
                'extrusion': {
                  'scaleType': 'linear',
                  'field': 'value',
                  'value': [0, 5],
                },
                'fill': {
                  'scaleType': 'ordinal',
                  'opacity': 0.9,
                  'field': 'colorValue',
                  'color': ['#1b9e77', '#d95f02', '#7570b3', '#e7298a', '#66a61e', '#e6ab02']
                },
                'stroke': {
                  'width': 1,
                  'color': 'white',
                },
              },
            },
          }
        ]
      }
    />
  ))
  .addWithJSX('Flow Map', withReadme(FlowMap, () =>
    <VRViz
      scene={
        {
          'sky': {
            'style': {
              'color': '#333',
              'texture': false,
            }
          },
          'lights': [
            {
              'type': 'directional',
              'color': '#fff',
              'position': '0 1 1',
              'intensity': 1,
              "decay": 1,
            },
            {
              'type': 'ambient',
              'color': '#fff',
              'intensity': 1,
              "decay": 1,
            }
          ],
          'camera': {
            'position': '5 5 20',
            'rotation': '0 0 0',
          },
          'reloadPageOnExitVR':true
        }
      }
      graph={
        [
          {
            'type': 'FlowMap',
            'data': {
              'dataFile': "data/data8.csv",
              'fileType': 'csv',
              'fieldDesc': [['source_latitude', 'number'], ['source_longitude', 'number'], ['target_latitude', 'number'], ['target_longitude', 'number']]
            },
            'style': {
              'origin': [0, 0, 0],
            },
            'mark': {
              'mapScale': 20,
              'mapOrigin': [5, 5],
              'rotation': '-90 0 0',
              'map': {
                'data': mapData,
                'projection': 'Mercator',
                'shapeIdentifier': 'id',
                'shapeKey': 'countries',
                'style': {
                  'extrusion': {
                    'value': 0.000001,
                  },
                  'fill': {
                    'color': '#111',
                    'opacity': 1,
                  },
                  'stroke': {
                    'width': 1,
                    'color': '#444',
                  },
                },
              },
              'flowlines': {
                'style': {
                  'opacity': {
                    'value': 0.4,
                  },
                  'stroke': {
                    'color': '#2196f3',
                  },
                },
              },
              'nodes': {
                'source': {
                  'type': 'sphere',
                  'style': {
                    'radius': {
                      'value': 0.05,
                    },
                    'fill': {
                      'color': '#b71c1c',
                      'opacity': 0.5,
                    },
                  }
                },
                'target': {
                  'type': 'sphere',
                  'style': {
                    'radius': {
                      'value': 0.05,
                    },
                    'fill': {
                      'color': '#0f9d5b',
                      'opacity': 0.5,
                    },
                  }
                }
              },
            },
          }
        ]
      }
    />
  ))
  .addWithJSX('Map With IsoLine (Contour Lines)', withReadme(MapWithIsoLines, () =>
    <VRViz
      scene={
        {
          'sky': {
            'style': {
              'color': '#333',
              'texture': false,
            }
          },
          'lights': [
            {
              'type': 'directional',
              'color': '#fff',
              'position': '0 1 1',
              'intensity': 1,
              "decay": 1,
            },
            {
              'type': 'ambient',
              'color': '#fff',
              'intensity': 1,
              "decay": 1,
            }
          ],
          'camera': {
            'position': '0 0 0',
            'rotation': '0 0 0',
          },
          'reloadPageOnExitVR':true
        }
      }
      graph={
        [
          {
            'type': 'MapContourLines',
            'style': {
              'origin': [0, 0, 0],
            },
            'data': {
              'dataFile': "data/mapContourLines.csv",
              'fileType': 'csv',
              'fieldDesc': [['geojson', 'jsonObject'], ['objectid', 'number'], ['isoline_ty', 'text'], ['shape_len', 'text'], ['elevation', 'number']]
            },
            'style': {
              'origin': [0, 0, 0],
            },
            'mark': {
              'mapScale': 2500,
              'mapOrigin': [4978.205, 1862.288],
              'rotation': '-90 0 0',
              'map': {
                'data': sfMapData,
                'projection': 'Mercator',
                'shapeIdentifier': 'id',
                'shapeKey': 'neighbourhood',
                'style': {
                  'extrusion': {
                    'value': 0.0000001,
                  },
                  'fill': {
                    'color': '#111',
                    'opacity': 1,
                  },
                  'stroke': {
                    'width': 1,
                    'color': '#555',
                  },
                },
              },
              'isoLines': {
                'elevation': {
                  'field': 'elevation',
                  'value': [0, 2],
                },
                'style': {
                  'stroke': {
                    'width': 1,
                    'scaleType': 'linear',
                    'field': 'elevation',
                    'color': ['#b71c1c', '#2196f3'],
                  },
                }
              },
            },
          }
        ]
      }
    />
  ))
  .addWithJSX('Map With Time Bars', withReadme(MapTimeBars, () =>
    <VRViz
      scene={
        {
          'sky': {
            'style': {
              'color': '#333',
              'texture': false,
            }
          },
          'lights': [
            {
              'type': 'directional',
              'color': '#fff',
              'position': '0 1 1',
              'intensity': 1,
              "decay": 1,
            },
            {
              'type': 'ambient',
              'color': '#fff',
              'intensity': 1,
              "decay": 1,
            }
          ],
          'camera': {
            'position': '0 0 0',
            'rotation': '0 0 0',
          },
          'reloadPageOnExitVR':true
        }
      }
      graph={
        [
          {
            'type': 'MapTimeBars',
            'data': {
              'dataFile': "data/mapTimeBars.csv",
              'fileType': 'csv',
              'fieldDesc': [['latitude', 'number'], ['longitude', 'number'], ['2000', 'number'], ['2001', 'number'], ['2002', 'number'], ['2003', 'number'], ['2004', 'number'], ['2005', 'number'], ['2006', 'number'], ['2007', 'number'], ['2008', 'number'], ['2009', 'number'], ['2010', 'number']]
            },
            'style': {
              'origin': [0, 0, 0],
            },
            'mark': {
              'mapScale': 20,
              'mapOrigin': [5, 5],
              'rotation': '-45 0 0',
              'map': {
                'data': mapData,
                'projection': 'Mercator',
                'shapeIdentifier': 'id',
                'shapeKey': 'countries',
                'style': {
                  'extrusion': {
                    'value': 0.0000001,
                  },
                  'fill': {
                    'color': '#111',
                    'opacity': 1,
                  },
                  'stroke': {
                    'width': 1,
                    'color': '#555',
                  },
                },
              },
              'timeLayers': {
                'type': 'cylinder',
                'position': {
                  'x': {
                    'field': 'longitude',
                  },
                  'y': {
                    'domain': ['2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010'],
                  },
                  'z': {
                    'field': 'latitude',
                  }
                },
                'style': {
                  'radius': {
                    'scaleType': 'linear',
                    'value': [0, 1],
                    'startFromZero': true,
                  },
                  'height': 0.2,
                  'padding': 0,
                  'fill': {
                    'opacity': 1,
                    'scaleType': 'linear',
                    'color': ['#ea4335', '#34a853'],
                  },
                }
              },
            },
          }
        ]
      }
    />
  ))
  .addWithJSX('Regional Map with Bars', withReadme(MapBarChart, () =>
    <VRViz
      scene={
        {
          'sky': {
            'style': {
              'color': '#333',
              'texture': false,
            }
          },
          'lights': [
            {
              'type': 'directional',
              'color': '#fff',
              'position': '0 1 1',
              'intensity': 1,
              "decay": 1,
            },
            {
              'type': 'ambient',
              'color': '#fff',
              'intensity': 1,
              "decay": 1,
            }
          ],
          'camera': {
            'position': '0 0 0',
            'rotation': '0 0 0',
          },
          'reloadPageOnExitVR':true
        }
      }
      graph={
        [
          {
            'type': 'MapBarChart',
            'data': {
              'dataFile': "data/noOfTrees.csv",
              'fileType': 'csv',
              'fieldDesc': [['latitude', 'number'], ['longitude', 'number'], ['value', 'number']]
            },
            'style': {
              'origin': [0, 0, 0],
            },
            'mark': {
              'mapScale': 2500,
              'mapOrigin': [4978.205, 1862.288],
              'rotation': '-45 0 0',
              'map': {
                'data': sfMapData,
                'projection': 'Mercator',
                'shapeIdentifier': 'id',
                'shapeKey': 'neighbourhood',
                'style': {
                  'extrusion': {
                    'value': 0.0000001,
                  },
                  'fill': {
                    'color': '#111',
                    'opacity': 1,
                  },
                  'stroke': {
                    'width': 1,
                    'color': '#555',
                  },
                },
              },
              'bars': {
                'type': 'cone',
                'style': {
                  'radius': 0.02,
                  'height': {
                    'scaleType': 'linear',
                    'field': 'value',
                    'value': [0, 1],
                    'startFromZero': true,
                  },
                  'fill': {
                    'scaleType': 'linear',
                    'opacity': 0.9,
                    'field': 'value',
                    'color': ['#ea4335', '#34a853'],
                  },
                }
              },
            },
          }
        ]
      }
    />
  ))
  .addWithJSX('World Map with Bars', withReadme(MapBarChart, () =>
    <VRViz
      scene={
        {
          'sky': {
            'style': {
              'color': '#333',
              'texture': false,
            }
          },
          'lights': [
            {
              'type': 'directional',
              'color': '#fff',
              'position': '0 1 1',
              'intensity': 1,
              "decay": 1,
            },
            {
              'type': 'ambient',
              'color': '#fff',
              'intensity': 1,
              "decay": 1,
            }
          ],
          'camera': {
            'position': '5 5 20',
            'rotation': '0 0 0',
          },
          'reloadPageOnExitVR':true
        }
      }
      graph={
        [
          {
            'type': 'MapBarChart',
            'data': {
              'dataFile': "data/mapBarChart.csv",
              'fileType': 'csv',
              'fieldDesc': [['latitude', 'number'], ['longitude', 'number'], ['value', 'number']]
            },
            'style': {
              'origin': [0, 0, 0],
            },
            'mark': {
              'mapScale': 20,
              'mapOrigin': [5, 5],
              'rotation': '-75 0 0',
              'map': {
                'data': mapData,
                'projection': 'Mercator',
                'shapeIdentifier': 'id',
                'shapeKey': 'countries',
                'style': {
                  'extrusion': {
                    'value': 0.0000001,
                  },
                  'fill': {
                    'color': '#111',
                    'opacity': 1,
                  },
                  'stroke': {
                    'width': 1,
                    'color': '#444',
                  },
                },
              },
              'bars': {
                'type': 'box',
                'style': {
                  'depth': 0.2,
                  'width': 0.2,
                  'height': {
                    'scaleType': 'linear',
                    'field': 'value',
                    'value': [0, 5],
                  },
                  'fill': {
                    'scaleType': 'linear',
                    'opacity': 0.9,
                    'field': 'value',
                    'color': ['#b71c1c', '#2196f3'],
                  },
                }
              },
            },
          }
        ]
      }
    />
  ))
  .addWithJSX('World Map with Stacked Bars', withReadme(MapStackedBarChart, () =>
    <VRViz
      scene={
        {
          'sky': {
            'style': {
              'color': '#333',
              'texture': false,
            }
          },
          'lights': [
            {
              'type': 'directional',
              'color': '#fff',
              'position': '0 1 1',
              'intensity': 1,
              "decay": 1,
            },
            {
              'type': 'ambient',
              'color': '#fff',
              'intensity': 1,
              "decay": 1,
            }
          ],
          'camera': {
            'position': '5 5 20',
            'rotation': '0 0 0',
          },
          'reloadPageOnExitVR':true
        }
      }
      graph={
        [
          {
            'type': 'MapStackedBarChart',
            'data': {
              'dataFile': "data/mapStackedBarChart.csv",
              'fileType': 'csv',
              'fieldDesc': [['latitude', 'number'], ['longitude', 'number'], ['value', 'number'], ['value1', 'number']]
            },
            'style': {
              'origin': [0, 0, 0],
            },
            'mark': {
              'mapScale': 20,
              'mapOrigin': [5, 5],
              'rotation': '-75 0 0',
              'map': {
                'data': mapData,
                'projection': 'Mercator',
                'shapeIdentifier': 'id',
                'shapeKey': 'countries',
                'style': {
                  'extrusion': {
                    'value': 0.0000001,
                  },
                  'fill': {
                    'opacity': 1,
                    'color': '#111',
                  },
                  'stroke': {
                    'width': 1,
                    'color': '#444',
                  },
                },
              },
              'bars': {
                'type': 'box',
                'style': {
                  'depth': 0.2,
                  'width': 0.2,
                  'height': {
                    'scaleType': 'linear',
                    'field': ['value', 'value1'],
                    'value': [0, 5],
                    'startFromZero': true,
                  },
                  'fill': {
                    'opacity': 0.6,
                    'scaleType': 'ordinal',
                    'color': ['#b71c1c', '#2196f3'],
                    'field': ['value', 'value1'],
                  },
                }
              },
            },
          }
        ]
      }
    />
  ))


storiesOf('Surface Plot', module)
  .addWithJSX('Surface Plot With Mesh', withReadme(SurfacePlot, () =>
    <VRViz
      scene={
        {
          'sky': {
            'style': {
              'color': '#333',
              'texture': false,
            }
          },
          'lights': [
            {
              'type': 'directional',
              'color': '#fff',
              'position': '0 1 1',
              'intensity': 1,
              "decay": 1,
            },
            {
              'type': 'ambient',
              'color': '#fff',
              'intensity': 1,
              "decay": 1,
            }
          ],
          'camera': {
            'position': '5 3 10',
            'rotation': '0 0 0',
          },
          'reloadPageOnExitVR':true
        }
      }
      graph={
        [
          {
            'type': 'SurfacePlot',
            'style': {
              'origin': [0, 0, 0],
              'dimensions': {
                'width': 10,
                'height': 10,
                'depth': 10,
              },
            },
            'mark': {
              'type': 'plane',
              'position': {
                'x': {
                  'scaleType': 'linear',
                  'domain': [0, 2 * Math.PI],
                  'steps': 50,
                },
                'y': {
                  'scaleType': 'linear',
                  'function': (x, z) => x * Math.sin(x) - z * Math.cos(z),
                },
                'z': {
                  'scaleType': 'linear',
                  'domain': [0, 2 * Math.PI],
                  'steps': 50,
                }
              },
              'style': {
                'fill': {
                  'scaleType': 'linear',
                  'function': (x, z) => x * z,
                  'color': ['#b71c1c', '#2196f3'],
                  'opacity': 1,
                },
                'stroke': {
                  'width': 1,
                  'color': '#999',
                }
              }
            },
            'axis': {
              'x-axis': {
                'orient': 'front-bottom',
                'title': {
                  'value': '',
                  'fontSize': 3,
                  'color': 'white',
                  'opacity': 0.3,
                },
                'ticks': {
                  'noOfTicks': 10,
                  'size': 0.01,
                  'color': 'white',
                  'opacity': 0.3,
                  'fontSize': 3,
                },
                'grid': {
                  'color': 'white',
                  'opacity': 0.3,
                }
              },
              'y-axis': {
                'orient': 'front-left',
                'title': {
                  'value': '',
                  'fontSize': 3,
                  'color': 'white',
                  'opacity': 0.3,
                },
                'ticks': {
                  'noOfTicks': 10,
                  'size': 0.01,
                  'color': 'white',
                  'opacity': 0.3,
                  'fontSize': 3,
                },
                'grid': {
                  'color': 'white',
                  'opacity': 0.3,
                }
              },
              'z-axis': {
                'title': {
                  'value': '',
                  'fontSize': 3,
                  'color': 'white',
                  'opacity': 0.3,
                },
                'ticks': {
                  'noOfTicks': 10,
                  'size': 0.01,
                  'color': 'white',
                  'opacity': 0.3,
                  'fontSize': 3,
                },
                'grid': {
                  'color': 'white',
                  'opacity': 0.3,
                }
              }
            }
          }
        ]
      }
    />
  ))
  .addWithJSX('Surface Plot Only Mesh', withReadme(SurfacePlot, () =>
    <VRViz
      scene={
        {
          'sky': {
            'style': {
              'color': '#333',
              'texture': false,
            }
          },
          'lights': [
            {
              'type': 'directional',
              'color': '#fff',
              'position': '0 1 1',
              'intensity': 1,
              "decay": 1,
            },
            {
              'type': 'ambient',
              'color': '#fff',
              'intensity': 1,
              "decay": 1,
            }
          ],
          'camera': {
            'position': '5 3 10',
            'rotation': '0 0 0',
          },
          'reloadPageOnExitVR':true
        }
      }
      graph={
        [
          {
            'type': 'SurfacePlot',
            'style': {
              'origin': [0, 0, 0],
              'dimensions': {
                'width': 10,
                'height': 10,
                'depth': 10,
              },
            },
            'mark': {
              'type': 'plane',
              'position': {
                'x': {
                  'scaleType': 'linear',
                  'domain': [0, 2 * Math.PI],
                  'steps': 50,
                },
                'y': {
                  'scaleType': 'linear',
                  'function': (x, z) => x * Math.sin(x) - z * Math.cos(z),
                },
                'z': {
                  'scaleType': 'linear',
                  'domain': [0, 2 * Math.PI],
                  'steps': 50,
                }
              },
              'style': {
                'fill': {
                  'scaleType': 'linear',
                  'function': (x, z) => x * z,
                  'color': ['#b71c1c', '#2196f3'],
                  'opacity': 0,
                },
                'stroke': {
                  'width': 1,
                  'color': '#fff',
                }
              }
            },
            'axis': {
              'x-axis': {
                'orient': 'front-bottom',
                'title': {
                  'value': '',
                  'fontSize': 3,
                  'color': 'white',
                  'opacity': 0.3,
                },
                'ticks': {
                  'noOfTicks': 10,
                  'size': 0.01,
                  'color': 'white',
                  'opacity': 0.3,
                  'fontSize': 3,
                },
                'grid': {
                  'color': 'white',
                  'opacity': 0.3,
                }
              },
              'y-axis': {
                'orient': 'front-left',
                'title': {
                  'value': '',
                  'fontSize': 3,
                  'color': 'white',
                  'opacity': 0.3,
                },
                'ticks': {
                  'noOfTicks': 10,
                  'size': 0.01,
                  'color': 'white',
                  'opacity': 0.3,
                  'fontSize': 3,
                },
                'grid': {
                  'color': 'white',
                  'opacity': 0.3,
                }
              },
              'z-axis': {
                'title': {
                  'value': '',
                  'fontSize': 3,
                  'color': 'white',
                  'opacity': 0.3,
                },
                'ticks': {
                  'noOfTicks': 10,
                  'size': 0.01,
                  'color': 'white',
                  'opacity': 0.3,
                  'fontSize': 3,
                },
                'grid': {
                  'color': 'white',
                  'opacity': 0.3,
                }
              }
            }
          }
        ]
      }
    />
  ))
  .addWithJSX('Surface Plot Only Surface', withReadme(SurfacePlot, () =>
    <VRViz
      scene={
        {
          'sky': {
            'style': {
              'color': '#333',
              'texture': false,
            }
          },
          'lights': [
            {
              'type': 'directional',
              'color': '#fff',
              'position': '0 1 1',
              'intensity': 1,
              "decay": 1,
            },
            {
              'type': 'ambient',
              'color': '#fff',
              'intensity': 1,
              "decay": 1,
            }
          ],
          'camera': {
            'position': '5 3 10',
            'rotation': '0 0 0',
          },
          'reloadPageOnExitVR':true
        }
      }
      graph={
        [
          {
            'type': 'SurfacePlot',
            'style': {
              'origin': [0, 0, 0],
              'dimensions': {
                'width': 10,
                'height': 10,
                'depth': 10,
              },
            },
            'mark': {
              'type': 'plane',
              'position': {
                'x': {
                  'scaleType': 'linear',
                  'domain': [0, 2 * Math.PI],
                  'steps': 50,
                },
                'y': {
                  'scaleType': 'linear',
                  'function': (x, z) => x * Math.sin(x) - z * Math.cos(z),
                },
                'z': {
                  'scaleType': 'linear',
                  'domain': [0, 2 * Math.PI],
                  'steps': 50,
                }
              },
              'style': {
                'fill': {
                  'scaleType': 'linear',
                  'function': (x, z) => x * z,
                  'color': ['#b71c1c', '#2196f3'],
                  'opacity': 1,
                },
              }
            },
            'axis': {
              'x-axis': {
                'orient': 'front-bottom',
                'title': {
                  'value': '',
                  'fontSize': 3,
                  'color': 'white',
                  'opacity': 0.3,
                },
                'ticks': {
                  'noOfTicks': 10,
                  'size': 0.01,
                  'color': 'white',
                  'opacity': 0.3,
                  'fontSize': 3,
                },
                'grid': {
                  'color': 'white',
                  'opacity': 0.3,
                }
              },
              'y-axis': {
                'orient': 'front-left',
                'title': {
                  'value': '',
                  'fontSize': 3,
                  'color': 'white',
                  'opacity': 0.3,
                },
                'ticks': {
                  'noOfTicks': 10,
                  'size': 0.01,
                  'color': 'white',
                  'opacity': 0.3,
                  'fontSize': 3,
                },
                'grid': {
                  'color': 'white',
                  'opacity': 0.3,
                }
              },
              'z-axis': {
                'title': {
                  'value': '',
                  'fontSize': 3,
                  'color': 'white',
                  'opacity': 0.3,
                },
                'ticks': {
                  'noOfTicks': 10,
                  'size': 0.01,
                  'color': 'white',
                  'opacity': 0.3,
                  'fontSize': 3,
                },
                'grid': {
                  'color': 'white',
                  'opacity': 0.3,
                }
              }
            }
          }
        ]
      }
    />
  ))
  .addWithJSX('Parametric Surface Plot', withReadme(ParametricSurfacePlot, () =>
    <VRViz
      scene={
        {
          'sky': {
            'style': {
              'color': '#333',
              'texture': false,
            }
          },
          'lights': [
            {
              'type': 'directional',
              'color': '#fff',
              'position': '0 1 1',
              'intensity': 1,
              "decay": 1,
            },
            {
              'type': 'ambient',
              'color': '#fff',
              'intensity': 1,
              "decay": 1,
            }
          ],
          'camera': {
            'position': '0 0 0',
            'rotation': '0 0 0',
          },
          'reloadPageOnExitVR':true
        }
      }
      graph={
        [
          {
            'type': 'ParametricSurfacePlot',
            'style': {
              'origin': [0, 0, 0],
              'dimensions': {
                'width': 10,
                'height': 10,
                'depth': 10,
              },
            },
            'mark': {
              'position': {
                'x': {
                  'scaleType': 'linear',
                  'function': (u, v) => Math.cos(u) * (3 + Math.cos(v)),
                  'domain': [0, 10]
                },
                'y': {
                  'scaleType': 'linear',
                  'function': (u, v) => Math.sin(v),
                  'domain': [0, 10]
                },
                'z': {
                  'scaleType': 'linear',
                  'function': (u, v) => Math.sin(u) * (3 + Math.cos(v)),
                  'domain': [0, 10]
                }
              },
              'type': 'plane',
              'style': {
                'fill': {
                  'opacity': 0.4,
                  'color': '#b71c1c',
                },
                'stroke': {
                  'width': 1,
                  'color': '#666',
                }
              }
            },
            'parameter': {
              'parameter1': {
                'domain': [0, 2 * Math.PI],
                'steps': 50,
              },
              'parameter2': {
                'domain': [0, 2 * Math.PI],
                'steps': 50,
              }
            }
          }
        ]
      }
    />
  ))


storiesOf('Curve Plot', module)
  .addWithJSX('Curve Plot', withReadme(ContourPlot, () =>
    <VRViz
      scene={
        {
          'sky': {
            'style': {
              'color': '#333',
              'texture': false,
            }
          },
          'lights': [
            {
              'type': 'directional',
              'color': '#fff',
              'position': '0 1 1',
              'intensity': 1,
              "decay": 1,
            },
            {
              'type': 'ambient',
              'color': '#fff',
              'intensity': 1,
              "decay": 1,
            }
          ],
          'camera': {
            'position': '0 0 10',
            'rotation': '0 0 0',
          },
          'reloadPageOnExitVR':true
        }
      }
      graph={
        [
          {
            'type': 'ContourPlot',
            'style': {
              'origin': [0, 0, 0],
              'dimensions': {
                'width': 10,
                'height': 10,
                'depth': 10,
              },
            },
            'mark': {
              'type': 'line',
              'position': {
                'x': {
                  'scaleType': 'linear',
                  'function': (y) => Math.sin(y),
                },
                'y': {
                  'scaleType': 'linear',
                  'domain': [0, 6 * Math.PI],
                  'range': [0, 10],
                  'steps': 150,
                },
                'z': {
                  'scaleType': 'linear',
                  'function': (y) => Math.cos(y),
                }
              },
              'style': {
                'opacity': 1,
                'color': '#2196f3',
              }
            },
            'axis': {
              'x-axis': {
                'orient': 'front-bottom',
                'title': {
                  'value': '',
                  'fontSize': 3,
                  'color': 'white',
                  'opacity': 0.6,
                },
                'ticks': {
                  'noOfTicks': 10,
                  'size': 0.01,
                  'color': 'white',
                  'opacity': 0.6,
                  'fontSize': 3,
                },
                'grid': {
                  'color': 'white',
                  'opacity': 0.6,
                }
              },
              'y-axis': {
                'orient': 'front-left',
                'title': {
                  'value': '',
                  'fontSize': 3,
                  'color': 'white',
                  'opacity': 0.6,
                },
                'ticks': {
                  'noOfTicks': 10,
                  'size': 0.01,
                  'color': 'white',
                  'opacity': 0.6,
                  'fontSize': 3,
                },
                'grid': {
                  'color': 'white',
                  'opacity': 0.6,
                }
              },
              'z-axis': {
                'title': {
                  'value': '',
                  'fontSize': 3,
                  'color': 'white',
                  'opacity': 0.6,
                },
                'ticks': {
                  'noOfTicks': 10,
                  'size': 0.01,
                  'color': 'white',
                  'opacity': 0.6,
                  'fontSize': 3,
                },
                'grid': {
                  'color': 'white',
                  'opacity': 0.6,
                }
              }
            }
          }
        ]
      }
    />
  ))
  .addWithJSX('Parametric Curve Plot', withReadme(ParametricCurvePlot, () =>
    <VRViz
      scene={
        {
          'sky': {
            'style': {
              'color': '#333',
              'texture': false,
            }
          },
          'lights': [
            {
              'type': 'directional',
              'color': '#fff',
              'position': '0 1 1',
              'intensity': 1,
              "decay": 1,
            },
            {
              'type': 'ambient',
              'color': '#fff',
              'intensity': 1,
              "decay": 1,
            }
          ],
          'camera': {
            'position': '0 0 10',
            'rotation': '0 0 0',
          },
          'reloadPageOnExitVR':true
        }
      }
      graph={
        [
          {
            'type': 'ParametricCurvePlot',
            'style': {
              'origin': [0, 0, 0],
              'dimensions': {
                'width': 10,
                'height': 10,
                'depth': 10,
              },
            },
            'mark': {
              'type': 'line',
              'position': {
                'x': {
                  'scaleType': 'linear',
                  'function': (y) => Math.sin(y),
                },
                'y': {
                  'scaleType': 'linear',
                  'function': (y) => Math.sin(y),
                },
                'z': {
                  'scaleType': 'linear',
                  'function': (y) => Math.cos(y),
                }
              },
              'style': {
                'opacity': 1,
                'color': '#2196f3',
              }
            },
            'axis': {
              'x-axis': {
                'orient': 'front-bottom',
                'title': {
                  'value': '',
                  'fontSize': 3,
                  'color': 'white',
                  'opacity': 0.6,
                },
                'ticks': {
                  'noOfTicks': 10,
                  'size': 0.01,
                  'color': 'white',
                  'opacity': 0.6,
                  'fontSize': 3,
                },
                'grid': {
                  'color': 'white',
                  'opacity': 0.6,
                }
              },
              'y-axis': {
                'orient': 'front-left',
                'title': {
                  'value': '',
                  'fontSize': 3,
                  'color': 'white',
                  'opacity': 0.6,
                },
                'ticks': {
                  'noOfTicks': 10,
                  'size': 0.01,
                  'color': 'white',
                  'opacity': 0.6,
                  'fontSize': 3,
                },
                'grid': {
                  'color': 'white',
                  'opacity': 0.6,
                }
              },
              'z-axis': {
                'title': {
                  'value': '',
                  'fontSize': 3,
                  'color': 'white',
                  'opacity': 0.6,
                },
                'ticks': {
                  'noOfTicks': 10,
                  'size': 0.01,
                  'color': 'white',
                  'opacity': 0.6,
                  'fontSize': 3,
                },
                'grid': {
                  'color': 'white',
                  'opacity': 0.6,
                }
              }
            },
            'parameter': {
              'domain': [0, 6 * Math.PI],
              'steps': 150,
            }
          }
        ]
      }
    />
  ))

storiesOf('Contour Map', module)
  .addWithJSX('Contour Map', withReadme(ContourMap, () =>
    <VRViz
      scene={
        {
          'sky': {
            'style': {
              'color': '#333',
              'texture': false,
            }
          },
          'lights': [
            {
              'type': 'directional',
              'color': '#fff',
              'position': '0 1 1',
              'intensity': 1,
              "decay": 1,
            },
            {
              'type': 'ambient',
              'color': '#fff',
              'intensity': 1,
              "decay": 1,
            }
          ],
          'camera': {
            'position': '0 0 10',
            'rotation': '0 0 0',
          },
          'reloadPageOnExitVR':true
        }
      }
      graph={
        [
          {
            'type': 'ContourMap',
            'data': {
              'dataFile': "data/contourMapData.csv",
              'fileType': 'text',
            },
            'style': {
              'origin': [0, 0, 0],
              'objectScale': {
                'ground': 0.1,
                'height': 0.1,
              }
            },
            'mark': {
              'type': 'plane',
              'heightThreshold': 100,
              'style': {
                'fill': {
                  'scaleType': 'linear',
                  'opacity': 0.7,
                  'color': ['#b71c1c', '#2196f3'],
                },
                'stroke': {
                  'width': 1,
                  'color': '#aaa',
                }
              },
            },
          }
        ]
      }
    />
  ))
  .addWithJSX('Contour Map Without Mesh', withReadme(ContourMap, () =>
    <VRViz
      scene={
        {
          'sky': {
            'style': {
              'color': '#333',
              'texture': false,
            }
          },
          'lights': [
            {
              'type': 'directional',
              'color': '#fff',
              'position': '0 1 1',
              'intensity': 1,
              "decay": 1,
            },
            {
              'type': 'ambient',
              'color': '#fff',
              'intensity': 1,
              "decay": 1,
            }
          ],
          'camera': {
            'position': '0 0 10',
            'rotation': '0 0 0',
          },
          'reloadPageOnExitVR':true
        }
      }
      graph={
        [
          {
            'type': 'ContourMap',
            'data': {
              'dataFile': "data/contourMapData.csv",
              'fileType': 'text',
            },
            'style': {
              'origin': [0, 0, 0],
              'objectScale': {
                'ground': 0.1,
                'height': 0.1,
              }
            },
            'mark': {
              'type': 'plane',
              'heightThreshold': 100,
              'style': {
                'fill': {
                  'scaleType': 'linear',
                  'opacity': 0.7,
                  'color': ['#b71c1c', '#2196f3'],
                },
              },
            },
          }
        ]
      }
    />
  ))

storiesOf('Network Graph', module)
  .addWithJSX('Force Directed Graph', withReadme(ForceDirectedGraph, () =>
    <VRViz
      scene={
        {
          'sky': {
            'style': {
              'color': '#333',
              'texture': false,
            }
          },
          'lights': [
            {
              'type': 'directional',
              'color': '#fff',
              'position': '0 1 1',
              'intensity': 1,
              "decay": 1,
            },
            {
              'type': 'ambient',
              'color': '#fff',
              'intensity': 1,
              "decay": 1,
            }
          ],
          'camera': {
            'position': '0 5 10',
            'rotation': '0 0 0',
          },
          'reloadPageOnExitVR':true
        }
      }
      graph={
        [
          {
            'type': 'ForceDirectedGraph',
            'data': {
              'dataFile': "data/ForceDirectedGraph.json",
              'fileType': 'json',
            },
            'style': {
              'origin': [0, 0, 0],
              'scale': 0.2,
            },
            'mark': {
              'nodes': {
                'type': 'sphere',
                'style': {
                  'radius': {
                    'value': 0.25,
                  },
                  'fill': {
                    'scaleType': 'ordinal',
                    'opacity': 1,
                    'field': 'group',
                  },
                },
              },
              'links': {
                'type': 'line',
                'style': {
                  'fill': {
                    'opacity': {
                      'value': 0.3,
                    },
                    'color': 'white',
                  },
                },
              },
              'labels': {
                'field': 'id',
                'style': {
                  'color': 'white',
                  'opacity': 1,
                  'fontSize': 3,
                  'padding': 0.1,
                }
              },
            },
          }
        ]
      }
    />
  ))


storiesOf('Mesh Plot', module)
  .addWithJSX('Mesh Plot', withReadme(MeshPlot, () =>
    <VRViz
      scene={
        {
          'sky': {
            'style': {
              'color': '#333',
              'texture': false,
            }
          },
          'lights': [
            {
              'type': 'directional',
              'color': '#fff',
              'position': '0 1 1',
              'intensity': 1,
              "decay": 1,
            },
            {
              'type': 'ambient',
              'color': '#fff',
              'intensity': 1,
              "decay": 1,
            }
          ],
          'camera': {
            'position': '10 5 12',
            'rotation': '0 0 0',
          },
          'reloadPageOnExitVR':true
        }
      }
      graph={
        [
          {
            'type': 'MeshPlot',
            'data': {
              'dataFile': "data/data4.csv",
              'fileType': 'csv',
              'fieldDesc': [['x', 'number'], [' -3', 'number'], ['-2.8', 'number'], ['-2.6', 'number'], ['-2.4', 'number'], ['-2.2', 'number'], ['-2.0', 'number'], ['-1.8', 'number'], ['-1.6', 'number'], ['-1.4', 'number'], ['-1.2', 'number'], ['-1.0', 'number'], ['-0.8', 'number'], ['-0.6', 'number'], ['-0.4', 'number'], ['-0.2', 'number'], ['0.0', 'number'], ['0.2', 'number'], ['0.4', 'number'], ['0.6', 'number'], ['0.8', 'number'], ['1.0', 'number'], ['1.2', 'number'], ['1.4', 'number'], ['1.6', 'number'], ['1.8', 'number'], ['2.0', 'number'], ['2.2', 'number'], ['2.4', 'number'], ['2.6', 'number'], ['2.8', 'number']]
            },
            'style': {
              'origin': [0, 0, 0],
              'dimensions': {
                'width': 30,
                'height': 10,
                'depth': 10,
              },
            },
            'mark': {
              'type': 'plane',
              'position': {
                'x': {
                  'scaleType': 'linear',
                  'field': 'x',
                },
                'y': {
                  'scaleType': 'linear',
                },
                'z': {
                  'scaleType': 'ordinal',
                  'field': ['-3', '-2.8', '-2.6', '-2.4', '-2.2', '-2.0', '-1.8', '-1.6', '-1.4', '-1.2', '-1.0', '-0.8', '-0.6', '-0.4', '-0.2', '0.0', '0.2', '0.4', '0.6', '0.8', '1.0', '1.2', '1.4', '1.6', '1.8', '2.0', '2.2', '2.4', '2.6', '2.8']
                }
              },
              'style': {
                'stroke': {
                  'color': '#aaa',
                  'width': 1,
                },
                'fill': {
                  'scaleType': 'linear',
                  'axis': 0,
                  'color': ['#b71c1c', '#2196f3'],
                  'opacity': 0.9,
                },
              }
            },
            'axis': {
              'x-axis': {
                'orient': 'front-bottom',
                'title': {
                  'value': '',
                  'fontSize': 3,
                  'color': 'white',
                  'opacity': 0.7,
                },
                'ticks': {
                  'noOfTicks': 10,
                  'size': 0.01,
                  'color': 'white',
                  'opacity': 0.7,
                  'fontSize': 3,
                },
                'grid': {
                  'color': 'white',
                  'opacity': 0.7,
                }
              },
              'y-axis': {
                'orient': 'front-left',
                'title': {
                  'value': '',
                  'fontSize': 3,
                  'color': 'white',
                  'opacity': 0.7,
                },
                'ticks': {
                  'noOfTicks': 10,
                  'size': 0.01,
                  'color': 'white',
                  'opacity': 0.7,
                  'fontSize': 3,
                },
                'grid': {
                  'color': 'white',
                  'opacity': 0.7,
                }
              },
              'z-axis': {
                'title': {
                  'value': '',
                  'fontSize': 3,
                  'color': 'white',
                  'opacity': 0.7,
                },
                'ticks': {
                  'noOfTicks': 10,
                  'size': 0.01,
                  'color': 'white',
                  'opacity': 0.7,
                  'fontSize': 3,
                },
                'grid': {
                  'color': 'white',
                  'opacity': 0.7,
                }
              }
            }
          }
        ]
      }
    />
  ))

storiesOf('WaterFall Plot', module)
  .addWithJSX('WaterFall Plot', withReadme(WaterFallPlot, () =>
    <VRViz
      scene={
        {
          'sky': {
            'style': {
              'color': '#333',
              'texture': false,
            }
          },
          'lights': [
            {
              'type': 'directional',
              'color': '#fff',
              'position': '0 1 1',
              'intensity': 1,
              "decay": 1,
            },
            {
              'type': 'ambient',
              'color': '#fff',
              'intensity': 1,
              "decay": 1,
            }
          ],
          'camera': {
            'position': '10 5 12',
            'rotation': '0 0 0',
          },
          'reloadPageOnExitVR':true
        }
      }
      graph={
        [
          {
            'type': 'WaterFallPlot',
            'data': {
              'dataFile': "data/data5.csv",
              'fileType': 'csv',
              'fieldDesc': [['x', 'number'], [' -3', 'number'], ['-2.8', 'number'], ['-2.6', 'number'], ['-2.4', 'number'], ['-2.2', 'number'], ['-2.0', 'number'], ['-1.8', 'number'], ['-1.6', 'number'], ['-1.4', 'number'], ['-1.2', 'number'], ['-1.0', 'number'], ['-0.8', 'number'], ['-0.6', 'number'], ['-0.4', 'number'], ['-0.2', 'number'], ['0.0', 'number'], ['0.2', 'number'], ['0.4', 'number'], ['0.6', 'number'], ['0.8', 'number'], ['1.0', 'number'], ['1.2', 'number'], ['1.4', 'number'], ['1.6', 'number'], ['1.8', 'number'], ['2.0', 'number'], ['2.2', 'number'], ['2.4', 'number'], ['2.6', 'number'], ['2.8', 'number']]
            },
            'style': {
              'origin': [0, 0, 0],
              'dimensions': {
                'width': 20,
                'height': 10,
                'depth': 10,
              }
            },
            'mark': {
              'position': {
                'x': {
                  'scaleType': 'ordinal',
                  'domain': ['-3', '-2.8', '-2.6', '-2.4', '-2.2', '-2.0', '-1.8', '-1.6', '-1.4', '-1.2', '-1.0', '-0.8', '-0.6', '-0.4', '-0.2', '0.0', '0.2', '0.4', '0.6', '0.8', '1.0', '1.2', '1.4', '1.6', '1.8', '2.0', '2.2', '2.4', '2.6', '2.8']
                },
                'y': {
                  'scaleType': 'linear',
                },
                'z': {
                  'scaleType': 'ordinal',
                  'field': 'x',
                }
              },
              'style': {
                'stroke': {
                  'color': '#666',
                  'width': 1,
                },
                'fill': {
                  'color': '#b71c1c',
                  'opacity': 0.1,
                }
              }
            },
            'axis': {
              'x-axis': {
                'orient': 'front-bottom',
                'title': {
                  'value': '',
                  'fontSize': 3,
                  'color': 'white',
                  'opacity': 0.7,
                },
                'ticks': {
                  'noOfTicks': 10,
                  'size': 0.01,
                  'color': 'white',
                  'opacity': 0.7,
                  'fontSize': 3,
                },
                'grid': {
                  'color': 'white',
                  'opacity': 0.7,
                }
              },
              'y-axis': {
                'orient': 'front-left',
                'title': {
                  'value': '',
                  'fontSize': 3,
                  'color': 'white',
                  'opacity': 0.7,
                },
                'ticks': {
                  'noOfTicks': 10,
                  'size': 0.01,
                  'color': 'white',
                  'opacity': 0.7,
                  'fontSize': 3,
                },
                'grid': {
                  'color': 'white',
                  'opacity': 0.7,
                }
              },
              'z-axis': {
                'title': {
                  'value': '',
                  'fontSize': 3,
                  'color': 'white',
                  'opacity': 0.7,
                },
                'ticks': {
                  'noOfTicks': 10,
                  'size': 0.01,
                  'color': 'white',
                  'opacity': 0.7,
                  'fontSize': 3,
                },
                'grid': {
                  'color': 'white',
                  'opacity': 0.7,
                }
              }
            }
          }
        ]
      }
    />
  ))
  .addWithJSX('WaterFall Plot Only Line', withReadme(WaterFallPlot, () =>
    <VRViz
      scene={
        {
          'sky': {
            'style': {
              'color': '#333',
              'texture': false,
            }
          },
          'lights': [
            {
              'type': 'directional',
              'color': '#fff',
              'position': '0 1 1',
              'intensity': 1,
              "decay": 1,
            },
            {
              'type': 'ambient',
              'color': '#fff',
              'intensity': 1,
              "decay": 1,
            }
          ],
          'camera': {
            'position': '10 5 12',
            'rotation': '0 0 0',
          },
          'reloadPageOnExitVR':true
        }
      }
      graph={
        [
          {
            'type': 'WaterFallPlot',
            'data': {
              'dataFile': "data/data5.csv",
              'fileType': 'csv',
              'fieldDesc': [['x', 'number'], [' -3', 'number'], ['-2.8', 'number'], ['-2.6', 'number'], ['-2.4', 'number'], ['-2.2', 'number'], ['-2.0', 'number'], ['-1.8', 'number'], ['-1.6', 'number'], ['-1.4', 'number'], ['-1.2', 'number'], ['-1.0', 'number'], ['-0.8', 'number'], ['-0.6', 'number'], ['-0.4', 'number'], ['-0.2', 'number'], ['0.0', 'number'], ['0.2', 'number'], ['0.4', 'number'], ['0.6', 'number'], ['0.8', 'number'], ['1.0', 'number'], ['1.2', 'number'], ['1.4', 'number'], ['1.6', 'number'], ['1.8', 'number'], ['2.0', 'number'], ['2.2', 'number'], ['2.4', 'number'], ['2.6', 'number'], ['2.8', 'number']]
            },
            'style': {
              'origin': [0, 0, 0],
              'dimensions': {
                'width': 20,
                'height': 10,
                'depth': 10,
              }
            },
            'mark': {
              'position': {
                'x': {
                  'scaleType': 'ordinal',
                  'domain': ['-3', '-2.8', '-2.6', '-2.4', '-2.2', '-2.0', '-1.8', '-1.6', '-1.4', '-1.2', '-1.0', '-0.8', '-0.6', '-0.4', '-0.2', '0.0', '0.2', '0.4', '0.6', '0.8', '1.0', '1.2', '1.4', '1.6', '1.8', '2.0', '2.2', '2.4', '2.6', '2.8']
                },
                'y': {
                  'scaleType': 'linear',
                },
                'z': {
                  'scaleType': 'ordinal',
                  'field': 'x',
                }
              },
              'style': {
                'stroke': {
                  'color': '#b71c1c',
                  'width': 4,
                }
              }
            },
            'axis': {
              'x-axis': {
                'orient': 'front-bottom',
                'title': {
                  'value': '',
                  'fontSize': 3,
                  'color': 'white',
                  'opacity': 0.7,
                },
                'ticks': {
                  'noOfTicks': 10,
                  'size': 0.01,
                  'color': 'white',
                  'opacity': 0.7,
                  'fontSize': 3,
                }
              },
              'y-axis': {
                'orient': 'front-left',
                'title': {
                  'value': '',
                  'fontSize': 3,
                  'color': 'white',
                  'opacity': 0.7,
                },
                'ticks': {
                  'noOfTicks': 10,
                  'size': 0.01,
                  'color': 'white',
                  'opacity': 0.7,
                  'fontSize': 3,
                }
              },
              'z-axis': {
                'title': {
                  'value': '',
                  'fontSize': 3,
                  'color': 'white',
                  'opacity': 0.7,
                },
                'ticks': {
                  'noOfTicks': 10,
                  'size': 0.01,
                  'color': 'white',
                  'opacity': 0.7,
                  'fontSize': 3,
                }
              }
            }
          }
        ]
      }
    />
  ))

storiesOf('Rectangle Chart', module)
  .addWithJSX('Rectangle Chart', withReadme(RectangleChart, () =>
    <VRViz
      scene={
        {
          'sky': {
            'style': {
              'color': '#333',
              'texture': false,
            }
          },
          'lights': [
            {
              'type': 'directional',
              'color': '#fff',
              'position': '0 1 1',
              'intensity': 1,
              "decay": 1,
            },
            {
              'type': 'ambient',
              'color': '#fff',
              'intensity': 1,
              "decay": 1,
            }
          ],
          'camera': {
            'position': '5 5 12',
            'rotation': '0 0 0',
          },
          'reloadPageOnExitVR':true
        }
      }
      graph={
        [
          {
            'type': 'RectangleChart',
            'data': {
              'dataFile': "data/data3.csv",
              'fileType': 'csv',
              'fieldDesc': [['Year', 'text'], ['miles', 'number'], ['gas', 'number'], ['emission', 'number']]
            },
            'style': {
              'origin': [0, 0, 0],
              'dimensions': {
                'width': 25,
                'height': 10,
                'depth': 10,
              }
            },
            'mark': {
              'position': {
                'x': {
                  'scaleType': 'ordinal',
                  'field': 'Year',
                },
              },
              'type': 'box',
              'style': {
                'padding': {
                  'x': 0.4,
                },
                'depth': {
                  'scaleType': 'linear',
                  'field': 'miles',
                  'startFromZero': true,
                },
                'height': {
                  'scaleType': 'linear',
                  'field': 'gas',
                  'startFromZero': true,
                },
                'fill': {
                  'opacity': 0.9,
                  'scaleType': 'linear',
                  'field': 'emission',
                  'color': ['#b71c1c', '#2196f3'],
                },
              },
              'mouseOver': {
                'focusedObject': {
                  'opacity': 1,
                },
                'nonFocusedObject': {
                  'opacity': 0.2,
                },
                'label': {
                  'value': (d) => `Year: ${d.Year}\nMiles: ${d.miles}\nGas: ${d.gas}\nEmmision: ${d.emission}`,
                  'align': 'center',
                  'width': 0.5,
                  'height': 0.35,
                  'wrapCount': 100,
                  'lineHeight': 75,
                  'backgroundColor': '#fff',
                  'backgroundOpacity': 0.9,
                  'fontColor': '#333',
                }
              },
            },
            'axis': {
              'x-axis': {
                'orient': 'front-bottom',
                'title': {
                  'value': '',
                  'fontSize': 3,
                  'color': 'white',
                  'opacity': 0.7,
                },
                'ticks': {
                  'noOfTicks': 10,
                  'size': 0.01,
                  'color': 'white',
                  'opacity': 0.7,
                  'fontSize': 3,
                },
                'grid': {
                  'color': 'white',
                  'opacity': 0.7,
                }
              },
              'y-axis': {
                'orient': 'front-left',
                'title': {
                  'value': '',
                  'fontSize': 3,
                  'color': 'white',
                  'opacity': 0.7,
                },
                'ticks': {
                  'noOfTicks': 10,
                  'size': 0.01,
                  'color': 'white',
                  'opacity': 0.7,
                  'fontSize': 3,
                },
                'grid': {
                  'color': 'white',
                  'opacity': 0.7,
                }
              },
              'z-axis': {
                'title': {
                  'value': '',
                  'fontSize': 3,
                  'color': 'white',
                  'opacity': 0.7,
                },
                'ticks': {
                  'noOfTicks': 10,
                  'size': 0.01,
                  'color': 'white',
                  'opacity': 0.7,
                  'fontSize': 3,
                },
                'grid': {
                  'color': 'white',
                  'opacity': 0.7,
                }
              }
            }
          }
        ]
      }
    />
  ))

storiesOf('Point Cloud', module)
  .addWithJSX('Point Cloud', withReadme(PointCloud, () =>
    <VRViz
      scene={
        {
          'sky': {
            'style': {
              'color': '#333',
              'texture': false,
            }
          },
          'lights': [
            {
              'type': 'directional',
              'color': '#fff',
              'position': '0 1 1',
              'intensity': 1,
              "decay": 1,
            },
            {
              'type': 'ambient',
              'color': '#fff',
              'intensity': 1,
              "decay": 1,
            }
          ],
          'camera': {
            'position': '8 5 12',
            'rotation': '0 0 0',
          },
          'reloadPageOnExitVR':true
        }
      }
      graph={
        [
          {
            'type': 'PointCloud',
            'data': {
              'dataFile': "data/PointCloud.ply",
              'fileType': 'ply',
            },
            'style': {
              'origin': [0, 0, 0],
              'objectScale': 0.01,
            },
            'mark': {
              'type': 'sphere',
              'style': {
                'radius': 0.05,
                'fill': {
                  'opacity': 0.8,
                  'color': '#2196f3',
                },
              },
            },
          }
        ]
      }
    />
  ))


storiesOf('Connected Scatter Plot', module)
  .addWithJSX('Connected Scatter Plot', withReadme(ConnectedScatterPlot, () =>
    <VRViz
      scene={
        {
          'sky': {
            'style': {
              'color': '#333',
              'texture': false,
            }
          },
          'lights': [
            {
              'type': 'directional',
              'color': '#fff',
              'position': '0 1 1',
              'intensity': 1,
              "decay": 1,
            },
            {
              'type': 'ambient',
              'color': '#fff',
              'intensity': 1,
              "decay": 1,
            }
          ],
          'camera': {
            'position': '10 3 15',
            'rotation': '0 0 0',
          },
          'reloadPageOnExitVR':true
        }
      }
      graph={
        [
          {
            'type': 'ConnectedScatterPlot',
            'data': {
              'dataFile': "data/data3.csv",
              'fileType': 'csv',
              'fieldDesc': [['Year', 'text'], ['miles', 'number'], ['gas', 'number'], ['emission', 'number']]
            },
            'style': {
              'origin': [0, 0, 0],
              'dimensions': {
                'width': 20,
                'height': 10,
                'depth': 10,
              },
            },
            'mark': {
              'position': {
                'x': {
                  'scaleType': 'linear',
                  'field': 'miles',
                },
                'y': {
                  'scaleType': 'linear',
                  'field': 'gas',
                },
                'z': {
                  'scaleType': 'linear',
                  'field': 'emission',
                }
              },
              'points': {
                'type': 'sphere',
                'style': {
                  'radius': {
                    'value': 0.05,
                  },
                  'fill': {
                    'opacity': 0.7,
                    'color': '#b71c1c',
                  },
                },
                'mouseOver': {
                  'focusedObject': {
                    'opacity': 1,
                  },
                  'nonFocusedObject': {
                    'opacity': 0.7,
                  },
                  'label': {
                    'value': (d) => `Year: ${d.Year}\nMiles: ${d.miles}\nGas: ${d.gas}\nEmmision: ${d.emission}`,
                    'align': 'center',
                    'width': 0.5,
                    'height': 0.35,
                    'wrapCount': 100,
                    'lineHeight': 75,
                    'backgroundColor': '#fff',
                    'backgroundOpacity': 0.9,
                    'fontColor': '#333',
                  }
                },
              },
              'line': {
                'style': {
                  'stroke': {
                    'color': 'white',
                    'opacity': 1,
                  },
                },
              },
              'label': {
                'field': 'Year',
                'style': {
                  'color': 'white',
                  'fontSize': 2,
                  'opacity': 0.7,
                },
              }
            },
            'axis': {
              'x-axis': {
                'orient': 'front-bottom',
                'title': {
                  'value': '',
                  'fontSize': 3,
                  'color': 'white',
                  'opacity': 0.3,
                },
                'ticks': {
                  'noOfTicks': 10,
                  'size': 0.01,
                  'color': 'white',
                  'opacity': 0.3,
                  'fontSize': 3,
                },
                'grid': {
                  'color': 'white',
                  'opacity': 0.3,
                }
              },
              'y-axis': {
                'orient': 'front-left',
                'title': {
                  'value': '',
                  'fontSize': 3,
                  'color': 'white',
                  'opacity': 0.3,
                },
                'ticks': {
                  'noOfTicks': 10,
                  'size': 0.01,
                  'color': 'white',
                  'opacity': 0.3,
                  'fontSize': 3,
                },
                'grid': {
                  'color': 'white',
                  'opacity': 0.3,
                }
              },
              'z-axis': {
                'title': {
                  'value': '',
                  'fontSize': 3,
                  'color': 'white',
                  'opacity': 0.3,
                },
                'ticks': {
                  'noOfTicks': 10,
                  'size': 0.01,
                  'color': 'white',
                  'opacity': 0.3,
                  'fontSize': 3,
                },
                'grid': {
                  'color': 'white',
                  'opacity': 0.3,
                }
              }
            }
          }
        ]
      }
    />
  ))

storiesOf('TreeMap', module)
  .addWithJSX('TreeMap', withReadme(TreeMap, () =>
    <VRViz
      scene={
        {
          'sky': {
            'style': {
              'color': '#333',
              'texture': false,
            }
          },
          'lights': [
            {
              'type': 'directional',
              'color': '#fff',
              'position': '0 1 1',
              'intensity': 1,
              "decay": 1,
            },
            {
              'type': 'ambient',
              'color': '#fff',
              'intensity': 1,
              "decay": 1,
            }
          ],
          'camera': {
            'position': '0 10 40',
            'rotation': '0 0 0',
          },
          'reloadPageOnExitVR':true
        }
      }
      graph={
        [
          {
            'type': 'TreeMap',
            'data': {
              'dataFile': "data/TreeMap.json",
              'fileType': 'json',
            },
            'style': {
              'origin': [0, 0, 0],
              'dimensions': {
                'width': 50,
                'depth': 50,
                'height': 5,
              }
            },
            'mark': {
              'type': 'box',
              'style': {
                'paddingInner': 0.5,
                'paddingOuter': 0.1,
                'extrusion': {
                  'field': 'size',
                  'startFromZero': true,
                },
                'fill': {
                  'scaleType': 'ordinal',
                  'opacity': 0.8,
                },
              },
            },
          }
        ]
      }
    />
  ))


  storiesOf('Cross-section View', module)
  .addWithJSX('Cross-section View', withReadme(CrossSectionView, () =>
    <VRViz
      scene={
        {
          'sky': {
            'style': {
              'color': '#333',
              'texture': false,
            }
          },
          'lights': [
            {
              'type': 'directional',
              'color': '#fff',
              'position': '0 1 1',
              'intensity': 1,
              "decay": 1,
            },
            {
              'type': 'ambient',
              'color': '#fff',
              'intensity': 1,
              "decay": 1,
            }
          ],
          'camera': {
            'position': '0 0 7.5',
            'rotation': '0 0 0',
          },
          'reloadPageOnExitVR':true
        }
      }
      graph={
        [
          {
            'type': 'CrossSectionView',
            'style': {
              'position': [0, 3, 0],
              'scale':[25,25,25],
            },
            'mark':{
              'material':{
                'type':'lambert',
                'fill': {
                  'opacity': 0.3,
                  'color': '#ffffff'
                },
                'stroke': {
                  'width': 1,
                  'color': '#333',
                  'edgeThresholdAngle':50
                },
                'highlightOnClick':{
                  'opacity': 0.8,
                  'color': '#ff0000',
                }
              },
              'object':'data/gearbox_conical/scene.gltf'
            }
          }
        ]
      }
    />
  ))

storiesOf('TimeSeries', module)
  .addWithJSX('TimeSeries', withReadme(TimeSeries, () =>
    <VRViz
      scene={
        {
          'sky': {
            'style': {
              'color': '#333',
              'texture': false,
            }
          },
          'lights': [
            {
              'type': 'directional',
              'color': '#fff',
              'position': '0 1 1',
              'intensity': 1,
              "decay": 1,
            },
            {
              'type': 'ambient',
              'color': '#fff',
              'intensity': 1,
              "decay": 1,
            }
          ],
          'camera': {
            'position': '5 5 12',
            'rotation': '0 0 0',
          },
          'reloadPageOnExitVR':true
        }
      }
      graph={
        [
          {
            'type': 'TimeSeries',
            'data': {
              'dataFile': "data/data3.csv",
              'fileType': 'csv',
              'fieldDesc': [['Year', 'text'], ['miles', 'number'], ['gas', 'number'], ['emission', 'number']]
            },
            'style': {
              'origin': [0, 0, 0],
              'dimensions': {
                'width': 15,
                'height': 10,
                'depth': 10,
              }
            },
            'mark': {
              'type': 'plane',
              'position': {
                'x': {
                  'scaleType': 'ordinal',
                  'field': 'Year',
                },
                'y': {
                  'scaleType': 'linear',
                  'field': 'miles',
                  'startFromZero': true,
                },
                'z': {
                  'scaleType': 'linear',
                  'field': 'gas',
                  'startFromZero': true,
                }
              },
              'style': {
                'fill': {
                  'color': '#CD363E',
                  'opacity': 0.8,
                },
                'stroke': {
                  'width': 1,
                  'color': 'white',
                },
              }
            },
            'axis': {
              'x-axis': {
                'orient': 'front-bottom',
                'title': {
                  'value': '',
                  'fontSize': 3,
                  'color': 'white',
                  'opacity': 0.7,
                },
                'ticks': {
                  'noOfTicks': 10,
                  'size': 0.01,
                  'color': 'white',
                  'opacity': 0.7,
                  'fontSize': 3,
                },
                'grid': {
                  'color': 'white',
                  'opacity': 0.7,
                }
              },
              'y-axis': {
                'orient': 'front-left',
                'title': {
                  'value': '',
                  'fontSize': 3,
                  'color': 'white',
                  'opacity': 0.7,
                },
                'ticks': {
                  'noOfTicks': 10,
                  'size': 0.01,
                  'color': 'white',
                  'opacity': 0.7,
                  'fontSize': 3,
                },
                'grid': {
                  'color': 'white',
                  'opacity': 0.7,
                }
              },
              'z-axis': {
                'title': {
                  'value': '',
                  'fontSize': 3,
                  'color': 'white',
                  'opacity': 0.7,
                },
                'ticks': {
                  'noOfTicks': 10,
                  'size': 0.01,
                  'color': 'white',
                  'opacity': 0.7,
                  'fontSize': 3,
                },
                'grid': {
                  'color': 'white',
                  'opacity': 0.7,
                }
              }
            }
          }
        ]
      }
    />
  ))

storiesOf('DashBoard', module)
  .addWithJSX('Dashboard with multiple graphs', () =>
    <VRViz
      scene={
        {
          'sky': {
            'style': {
              'color': '#333',
              'texture': false,
            }
          },
          'lights': [
            {
              'type': 'directional',
              'color': '#fff',
              'position': '0 1 1',
              'intensity': 1,
              "decay": 1,
            },
            {
              'type': 'ambient',
              'color': '#fff',
              'intensity': 1,
              "decay": 1,
            }
          ],
          'camera': {
            'position': '10.5 5.5 11',
            'rotation': '0 0 0',
          },
          'reloadPageOnExitVR':true
        }
      }
      graph={
        [
          {
            'type': 'BarGraph',
            'data': {
              'dataFile': "data/data1.csv",
              'fileType': 'csv',
              'fieldDesc': [['x', 'text'], ['z', 'text'], ['height', 'number']]
            },
            'style': {
              'origin': [0, 0, 0],
              'rotation': '0 0 0',
              'dimensions': {
                'width': 10,
                'height': 5,
                'depth': 10,
              },
            },
            'mark': {
              'type': 'cone',
              'position': {
                'x': {
                  'scaleType': 'ordinal',
                  'field': 'x',
                },
                'z': {
                  'scaleType': 'ordinal',
                  'field': 'z',
                }
              },
              'style': {
                'padding': {
                  'x': 0.1,
                  'z': 0.1,
                },
                'height': {
                  'scaleType': 'linear',
                  'startFromZero': true,
                  'field': 'height',
                },
                'fill': {
                  'opacity': 0.8,
                  'scaleType': 'linear',
                  'field': 'height',
                  'color': ['#DB4437', '#0f9d58'],
                },
              }
            },
            'axis': {
              'axis-box': {
                'color': 'black',
              },
              'x-axis': {
                'orient': 'bottom-back',
                'title': {
                  'value': '',
                  'fontSize': 3,
                  'color': 'black',
                  'opacity': 1,
                },
                'ticks': {
                  'noOfTicks': 10,
                  'size': 0.01,
                  'color': 'black',
                  'opacity': 1,
                  'fontSize': 3,
                },
                'grid': {
                  'color': 'black',
                  'opacity': 1,
                }
              },
              'y-axis': {
                'orient': 'bottom-back',
                'title': {
                  'value': '',
                  'fontSize': 3,
                  'color': 'black',
                  'opacity': 1,
                },
                'ticks': {
                  'noOfTicks': 10,
                  'size': 0.01,
                  'color': 'black',
                  'opacity': 1,
                  'fontSize': 3,
                },
                'grid': {
                  'color': 'black',
                  'opacity': 1,
                }
              },
              'z-axis': {
                'orient': 'bottom-back',
                'title': {
                  'value': '',
                  'fontSize': 3,
                  'color': 'black',
                  'opacity': 1,
                },
                'ticks': {
                  'noOfTicks': 10,
                  'size': 0.01,
                  'color': 'black',
                  'opacity': 1,
                  'fontSize': 3,
                },
                'grid': {
                  'color': 'black',
                  'opacity': 1,
                }
              }
            }
          },
          {
            'type': 'SurfacePlot',
            'style': {
              'origin': [0, 6, 0],
              'dimensions': {
                'width': 10,
                'height': 5,
                'depth': 10,
              },
            },
            'mark': {
              'type': 'plane',
              'position': {
                'x': {
                  'scaleType': 'linear',
                  'domain': [0, 2 * Math.PI],
                  'steps': 50,
                },
                'y': {
                  'scaleType': 'linear',
                  'function': (x, z) => x * Math.sin(x) - z * Math.cos(z),
                },
                'z': {
                  'scaleType': 'linear',
                  'domain': [0, 2 * Math.PI],
                  'steps': 50,
                }
              },
              'style': {
                'fill': {
                  'scaleType': 'linear',
                  'function': (x, z) => x * z,
                  'color': ['#DB4437', '#0f9d58'],
                  'opacity': 1,
                },
              }
            },
            'axis': {
              'axis-box': {
                'color': 'black',
              },
              'x-axis': {
                'orient': 'bottom-back',
                'title': {
                  'value': '',
                  'fontSize': 3,
                  'color': 'black',
                  'opacity': 1,
                },
                'ticks': {
                  'noOfTicks': 10,
                  'size': 0.01,
                  'color': 'black',
                  'opacity': 1,
                  'fontSize': 3,
                },
                'grid': {
                  'color': 'black',
                  'opacity': 1,
                }
              },
              'y-axis': {
                'orient': 'bottom-back',
                'title': {
                  'value': '',
                  'fontSize': 3,
                  'color': 'black',
                  'opacity': 1,
                },
                'ticks': {
                  'noOfTicks': 10,
                  'size': 0.01,
                  'color': 'black',
                  'opacity': 1,
                  'fontSize': 3,
                },
                'grid': {
                  'color': 'black',
                  'opacity': 1,
                }
              },
              'z-axis': {
                'orient': 'bottom-back',
                'title': {
                  'value': '',
                  'fontSize': 3,
                  'color': 'black',
                  'opacity': 1,
                },
                'ticks': {
                  'noOfTicks': 10,
                  'size': 0.01,
                  'color': 'black',
                  'opacity': 1,
                  'fontSize': 3,
                },
                'grid': {
                  'color': 'black',
                  'opacity': 1,
                }
              }
            }
          },
          {
            'type': 'ScatterPlot',
            'style': {
              'origin': [11, 0, 0],
              'dimensions': {
                'width': 10,
                'height': 11,
                'depth': 10,
              },
            },
            'data': {
              'dataFile': "data/scatterPlot.csv",
              'fileType': 'csv',
              'fieldDesc': [['sepal_length', 'number'], ['sepal_width', 'number'], ['petal_length', 'number'], ['petal_width', 'number'], ['species', 'text']]
            },
            'mark': {
              'position': {
                'x': {
                  'scaleType': 'linear',
                  'field': 'sepal_length',
                },
                'y': {
                  'scaleType': 'linear',
                  'field': 'sepal_width',
                },
                'z': {
                  'scaleType': 'linear',
                  'field': 'petal_length',
                }
              },
              'type': 'sphere',
              'style': {
                'radius': {
                  'scaleType': 'linear',
                  'field': 'petal_width',
                  'startFromZero': true,
                  'value': [0, 0.2],
                },
                'fill': {
                  'scaleType': 'ordinal',
                  'opacity': 0.4,
                  'field': 'species',
                  'domain': ['setosa', 'versicolor', 'virginica'],
                },
              },
              'droplines': {
                'xz': true,
                'yz': false,
                'xy': false,
                'style': {
                  'fill': {
                    'scaleType': 'ordinal',
                    'field': 'species',
                    'opacity': 0.4,
                    'domain': ['setosa', 'versicolor', 'virginica'],
                  },
                }
              },
              'projections': {
                'xz': false,
                'yz': true,
                'xy': true,
                'style': {
                  'fill': {
                    'scaleType': 'ordinal',
                    'field': 'species',
                    'opacity': 0.4,
                    'domain': ['setosa', 'versicolor', 'virginica'],
                  },
                  'radius': {
                    'scaleType': 'linear',
                    'field': 'petal_width',
                    'value': [0, 0.2],
                  },
                }
              }
            },
            'axis': {
              'axis-box': {
                'color': 'black',
              },
              'x-axis': {
                'orient': 'bottom-back',
                'title': {
                  'value': '',
                  'fontSize': 3,
                  'color': 'black',
                  'opacity': 1,
                },
                'ticks': {
                  'noOfTicks': 10,
                  'size': 0.01,
                  'color': 'black',
                  'opacity': 1,
                  'fontSize': 3,
                },
                'grid': {
                  'color': 'black',
                  'opacity': 1,
                }
              },
              'y-axis': {
                'orient': 'bottom-back',
                'title': {
                  'value': '',
                  'fontSize': 3,
                  'color': 'black',
                  'opacity': 1,
                },
                'ticks': {
                  'noOfTicks': 10,
                  'size': 0.01,
                  'color': 'black',
                  'opacity': 1,
                  'fontSize': 3,
                },
                'grid': {
                  'color': 'black',
                  'opacity': 1,
                }
              },
              'z-axis': {
                'orient': 'bottom-back',
                'title': {
                  'value': '',
                  'fontSize': 3,
                  'color': 'black',
                  'opacity': 1,
                },
                'ticks': {
                  'noOfTicks': 10,
                  'size': 0.01,
                  'color': 'black',
                  'opacity': 1,
                  'fontSize': 3,
                },
                'grid': {
                  'color': 'black',
                  'opacity': 1,
                }
              }
            }
          }
        ]
      }
    />
  )
