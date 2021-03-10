# MeshPlot Component

![MeshPlot](./imgs/MeshPlot.png)

[Detailed Documentation](https://github.com/mustafasaifee42/VR-Viz/blob/master/ReadMe/Charts/MeshPlot.md)

## `mark` Object in Graph Props

```
'mark': {
  'position': {
    'x': {
      'scaleType': 'ordinal',
      'field': 'Alpha',
    },
    'y': {
      'scaleType': 'linear',
    },
    'z': {
      'domain': ['-10', '0', '10'],
    }
  },
  'style': {
    'stroke': {
      'color': 'black',
      'width': 2,
    },
    'fill': {
      'scaleType': 'linear',
      'axis': 0,
      'color': ['green', 'blue'],
      'opacity': 0.7,
    },
  }
}
```

**Properties for `mark` for Parametric Mesh Plot**

| Property                 | Type            | Description                                                                                                                                                                                                            |
| ------------------------ | --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| position                 | object          | Defines the how the position of vertices for contour will be mapped. **Required**                                                                                                                                      |
| position.x               | object          | **Required.**                                                                                                                                                                                                          |
| position.x.scaleType     | string          | Defines the scale type for x position of the points on the mesh. **Not Required. Default value: ordinal.** _Available values: linear or ordinal._                                                                      |
| position.x.field         | string          | Defines the field in the data that will be mapped as x position of the points on the mesh. **Required.**                                                                                                               |
| position.x.domain        | float           | Defines the domain for x position. **Not Required.** _If not present the domain is calculated from the provided data depending on the position.x.scaleType._                                                           |
| position.x.startFromZero | boolean         | Defines if the domain starts from 0 or not. **Not Required. Default value: false** _Only applicable if position.x.domain is not given and position.x.scaleType is `linear`._                                           |
| position.y               | object          | **Not Required.**                                                                                                                                                                                                      |
| position.y.domain        | float           | Defines the domain for y position. **Not Required.** _If not present the domain is calculated from the provided data depending on the position.y.scaleType._                                                           |
| position.y.startFromZero | boolean         | Defines if the domain starts from 0 or not. **Not Required. Default value: false**.                                                                                                                                    |
| position.z               | object          | **Required.**                                                                                                                                                                                                          |
| position.z.field         | string          | Defines the field in the data that will be mapped as z position of the points on the mesh. **Required.**                                                                                                               |
| position.z.domain        | float           | Defines the domain for z position. **Not Required.** _If not present the domain is calculated from the provided data depending on the position.z.scaleType._                                                           |
| position.z.startFromZero | boolean         | Defines if the domain starts from 0 or not. **Not Required. Default value: false** _Only applicable if position.z.domain is not given and position.z.scaleType is `linear`._                                           |
| style                    | object          | Defines the style of the contour. **Not Required**                                                                                                                                                                     |
| style.fill               | object          | Defines the fill of the surface. **Not Required. If not present will show only the mesh.**                                                                                                                             |
| style.fill.opacity       | float           | Defines the opacity of the surface. **Not Required. Default value: 1.** _Value must be between 0 and 1._                                                                                                               |
| style.fill.axis          | string          | Defines along what axis the color will be changed. **Not Required.** _Availabe values: x, y, z._                                                                                                                       |
| style.fill.color         | array or string | Defines the color for fill. **Not Required. Default value: #ff0000 if style.fill.axis is not present else d3.schemeCategory10.** _If style.fill.axis is not present the this needs to be a string otherwise an array._ |
| style.stroke             | object          | Defines the stroke for the mesh. **Not Required. If not present the mesh are not stroked.** _This can be used to design a mesh to make the mesh more readable._                                                        |
| style.stroke.width       | float           | Defines the stroke of the mesh. **Not Required. Default valur: 1.**                                                                                                                                                    |
| style.stroke.color       | string          | Defines the stroke color for mesh. **Not Required. Default value: "#000000".**                                                                                                                                         |
| style.stroke.opacity     | float           | Defines the stroke opacity for mesh. **Not Required. Default value: 1.** _Value must be between 0 and 1._                                                                                                              |

## Data

**Datafile**: `csv`

```
Alpha,-10,0,10
10,-0.154623,-0.154975,-0.154623
20,-0.159781,-0.159673,-0.159781
30,-0.16475,-0.177522,-0.16475
```
