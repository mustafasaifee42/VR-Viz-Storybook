import React, { Component } from 'react';
import * as AFRAME from 'aframe';
import 'aframe-curve-component';
import * as d3 from 'd3';
import * as moment from 'moment';

import GetDomain from '../Utils/GetDomain.js';
import ReadPLY from '../Utils/ReadPLY.js';
import Axis from './Axis.js';
import AxisBox from './AxisBox.js';
import Shape from './Shape.js';

import { csv } from 'd3-request';
import { json } from 'd3-request';
import { text } from 'd3-request';


class ConnectedScatterPlot extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  componentWillMount() {
    if (this.props.data) {
      switch (this.props.data.fileType) {
        case 'json': {
          json(this.props.data.dataFile, (error, data) => {

            if (error) {
              this.setState({
                error: true,
              });
            } else {
              this.setState({
                data: data,
              });
            }
          });
          break;
        }
        case 'csv': {
          csv(this.props.data.dataFile, (error, data) => {
            data = data.map(d => {
              for (let i = 0; i < this.props.data.fieldDesc.length; i++) {
                if (this.props.data.fieldDesc[i][1] === 'number')
                  d[this.props.data.fieldDesc[i][0]] = +d[this.props.data.fieldDesc[i][0]]
                if ((this.props.data.fieldDesc[i][1] === 'date') || (this.props.data.fieldDesc[i][1] === 'time'))
                  d[this.props.data.fieldDesc[i][0]] = moment(d[this.props.data.fieldDesc[i][0]], this.props.data.fieldDesc[i][2])['_d']
                if (this.props.data.fieldDesc[i][1] === 'jsonObject')
                  d[this.props.data.fieldDesc[i][0]] = JSON.parse(d[this.props.data.fieldDesc[i][0]])
              }
              return d
            })
            if (error) {
              this.setState({
                error: true,
              });
            } else {
              this.setState({
                data: data,
              });
            }
          });
          break;
        }
        case 'ply': {
          let data = ReadPLY(this.props.data.dataFile);
          this.setState({
            data: data,
          })
          break;
        }
        case 'text': {
          text(this.props.data.dataFile, (error, text) => {

            let data = d3.csvParseRows(text).map(function (row) {
              return row.map(function (value) {
                return +value;
              });
            });
            if (error) {
              this.setState({
                error: true,
              });
            } else {
              this.setState({
                data: data,
              });
            }
          });
          break;
        }
        default: {
          csv(this.props.data.dataFile, (error, data) => {
            data = data.map(d => {
              for (let i = 0; i < this.props.data.fieldDesc.length; i++) {
                if (this.props.data.fieldDesc[i][1] === 'number')
                  d[this.props.data.fieldDesc[i][0]] = +d[this.props.data.fieldDesc[i][0]]
                if ((this.props.data.fieldDesc[i][1] === 'date') || (this.props.data.fieldDesc[i][1] === 'time'))
                  d[this.props.data.fieldDesc[i][0]] = moment(d[this.props.data.fieldDesc[i][0]], this.props.data.fieldDesc[i][2])['_d']
                if (this.props.data.fieldDesc[i][1] === 'jsonObject')
                  d[this.props.data.fieldDesc[i][0]] = JSON.parse(d[this.props.data.fieldDesc[i][0]])
              }
              return d
            })
            if (error) {
              this.setState({
                error: true,
              });
            } else {
              this.setState({
                data: data,
              });
            }
          });
          break;
        }
      }
    } else {
      this.setState({
        data: 'NA',
      });
    }
  }


  render() {
    if (!this.state.data)
      return (<a-entity />)
    // Getting domain for axis
    else {
      let xDomain, yDomain, zDomain, colorDomain, radiusDomain;

      if (!this.props.mark.position.x.domain)
        xDomain = GetDomain(this.state.data, this.props.mark.position.x.field, this.props.mark.position.x.scaleType, this.props.mark.position.x.startFromZero)
      else
        xDomain = this.props.mark.position.x.domain

      if (!this.props.mark.position.y.domain)
        yDomain = GetDomain(this.state.data, this.props.mark.position.y.field, this.props.mark.position.y.scaleType, this.props.mark.position.y.startFromZero)
      else
        yDomain = this.props.mark.position.y.domain

      if (!this.props.mark.position.z.domain)
        zDomain = GetDomain(this.state.data, this.props.mark.position.z.field, this.props.mark.position.z.scaleType, this.props.mark.position.z.startFromZero)
      else
        zDomain = this.props.mark.position.z.domain


      if (this.props.mark.points.style.fill.scaleType) {
        if (!this.props.mark.points.style.fill.domain)
          colorDomain = GetDomain(this.state.data, this.props.mark.points.style.fill.field, this.props.mark.points.style.fill.scaleType, this.props.mark.points.style.fill.startFromZero)
        else
          colorDomain = this.props.mark.points.style.fill.domain
      }

      if (this.props.mark.points.style.radius.scaleType) {
        if (!this.props.mark.points.style.radius.domain) {
          radiusDomain = [d3.min(this.state.data, d => d[this.props.mark.points.style.radius.field]), d3.max(this.state.data, d => d[this.props.mark.points.style.radius.field])]
        } else
          radiusDomain = this.props.mark.points.style.radius.domain
      }


      //Adding scales

      let xScale, yScale, zScale, colorScale, radiusScale;

      if (this.props.mark.position.x.range)
        xScale = d3.scaleLinear()
          .domain(xDomain)
          .range(this.props.mark.position.x.range)
      else
        xScale = d3.scaleLinear()
          .domain(xDomain)
          .range([0, this.props.style.dimensions.width])

      if (this.props.mark.position.y.range)
        yScale = d3.scaleLinear()
          .domain(yDomain)
          .range(this.props.mark.position.y.range)
      else
        yScale = d3.scaleLinear()
          .domain(yDomain)
          .range([0, this.props.style.dimensions.height])

      if (this.props.mark.position.z.range)
        zScale = d3.scaleLinear()
          .domain(zDomain)
          .range(this.props.mark.position.z.range)
      else
        zScale = d3.scaleLinear()
          .domain(zDomain)
          .range([0, this.props.style.dimensions.depth])

      if (this.props.mark.points.style.fill.scaleType) {
        let colorRange = d3.schemeCategory10;
        if (this.props.mark.points.style.fill.color)
          colorRange = this.props.mark.points.style.fill.color;
        if (this.props.mark.points.style.fill.scaleType === 'ordinal')
          colorScale = d3.scaleOrdinal()
            .domain(colorDomain)
            .range(colorRange)
        else
          colorScale = d3.scaleLinear()
            .domain(colorDomain)
            .range(colorRange)
      }


      if (this.props.mark.points.style.radius.scaleType) {
        if (this.props.mark.points.style.radius.scaleType === 'ordinal')
          radiusScale = d3.scaleOrdinal()
            .domain(radiusDomain)
            .range(this.props.mark.points.style.radius.value)
        else
          radiusScale = d3.scaleLinear()
            .domain(radiusDomain)
            .range(this.props.mark.points.style.radius.value)
      }
      //Axis
      let xAxis, yAxis, zAxis;

      if (this.props.xAxis) {
        xAxis = <Axis
          domain={xDomain}
          tick={this.props.xAxis.ticks}
          scale={xScale}
          axis={'x'}
          orient={this.props.xAxis.orient}
          title={this.props.xAxis.title}
          dimensions={this.props.style.dimensions}
          scaleType={this.props.mark.position.x.scaleType}
          grid={this.props.xAxis.grid}
        />
      }

      if (this.props.yAxis) {
        yAxis = <Axis
          domain={yDomain}
          tick={this.props.yAxis.ticks}
          scale={yScale}
          axis={'y'}
          orient={this.props.yAxis.orient}
          title={this.props.yAxis.title}
          dimensions={this.props.style.dimensions}
          scaleType={this.props.mark.position.y.scaleType}
          grid={this.props.yAxis.grid}
        />
      }

      if (this.props.zAxis) {
        zAxis = <Axis
          domain={zDomain}
          tick={this.props.zAxis.ticks}
          scale={zScale}
          axis={'z'}
          orient={this.props.zAxis.orient}
          title={this.props.zAxis.title}
          dimensions={this.props.style.dimensions}
          scaleType={this.props.mark.position.z.scaleType}
          grid={this.props.zAxis.grid}
        />

      }



      let graphTitle
      if (this.props.title) {
        graphTitle = <a-text color={this.props.title.color} wrapCount={this.props.title.wrapCount} lineHeight={this.props.title.lineHeight} width={this.props.title.width} value={this.props.title.value} anchor='align' side='double' align={this.props.title.align} position={this.props.title.position} rotation={this.props.title.rotation} />
      }
      let box;
      if (this.props.axisBox) {
        box = <AxisBox
          width={this.props.style.dimensions.width}
          height={this.props.style.dimensions.height}
          depth={this.props.style.dimensions.depth}
          color={this.props.axisBox.color}
        />
      }


      //Adding marks
      let marks = this.state.data.map((d, i) => {
        let color = this.props.mark.points.style.fill.color
        if (this.props.mark.points.style.fill.scaleType) {
          color = colorScale(d[this.props.mark.points.style.fill.field])
        }

        let radius = this.props.mark.points.style.radius.value
        if (this.props.mark.points.style.radius.scaleType) {
          radius = radiusScale(d[this.props.mark.points.style.radius.field])
        }

        let position = `${xScale(d[this.props.mark.position.x.field])} ${yScale(d[this.props.mark.position.y.field])} ${zScale(d[this.props.mark.position.z.field])}`
        let shape;
        if (this.props.mark.points.type)
          shape = this.props.mark.points.type
        else
          shape = 'sphere'

        let hover, hoverText
        if (this.props.mark.points.mouseOver) {
          if (this.props.mark.points.mouseOver.label)
            hoverText = this.props.mark.points.mouseOver.label.value(d)
        }
        return <Shape
          key={i}
          type={shape}
          color={`${color}`}
          opacity={this.props.mark.points.style.fill.opacity}
          depth={`${radius}`}
          height={`${radius}`}
          width={`${radius}`}
          radius={`${radius}`}
          position={position}
          hover={this.props.mark.points.mouseOver}
          hoverText={hoverText}
          graphID={this.props.index}
        />
      });

      let labels;
      if (this.props.mark.label) {
        if (this.props.mark.points.style.radius.scaleType)
          labels = this.state.data.map((d, i) => <a-text key={i} opacity={this.props.mark.label.style.opacity} color={this.props.mark.label.style.color} width={this.props.mark.label.style.fontSize} value={`${d[this.props.mark.label.field]}`} anchor='align' side='double' side='double' align='left' position={`${xScale(d[this.props.mark.position.x.field]) + 0.05 + radiusScale(d[this.props.mark.points.style.radius.field])} ${yScale(d[this.props.mark.position.y.field])} ${zScale(d[this.props.mark.position.z.field])}`} />);
        else
          labels = this.state.data.map((d, i) => <a-text key={i} opacity={this.props.mark.label.style.opacity} color={this.props.mark.label.style.color} width={this.props.mark.label.style.fontSize} value={`${d[this.props.mark.label.field]}`} anchor='align' side='double' side='double' align='left' position={`${xScale(d[this.props.mark.position.x.field]) + 0.05 + this.props.mark.points.style.radius.value} ${yScale(d[this.props.mark.position.y.field])} ${zScale(d[this.props.mark.position.z.field])}`} />);
      }

      let points = this.state.data.map((d, i) => <a-curve-point key={i} position={`${xScale(d[this.props.mark.position.x.field])} ${yScale(d[this.props.mark.position.y.field])} ${zScale(d[this.props.mark.position.z.field])}`} />);

      let curve = <a-curve id={'lineGraph'}>
        {points}
      </a-curve>

      return (
        <a-entity position={`${this.props.style.origin[0]} ${this.props.style.origin[1]} ${this.props.style.origin[2]}`} rotation={this.props.style.rotation} id={this.props.index}>
          <a-curve id={'lineGraph'}>
            {points}
          </a-curve>
          <a-draw-curve curveref='#lineGraph' material={`shader: line; color: ${this.props.mark.line.style.stroke.color}; opacity: ${this.props.mark.line.style.stroke.opacity}`} />
          {marks}
          {labels}
          {graphTitle}
          {xAxis}
          {yAxis}
          {zAxis}
          {box}
        </a-entity>
      )
    }
  }
}
export default ConnectedScatterPlot