import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";

const colors = d3.scaleOrdinal(d3.schemeCategory10);
const format = d3.format("1");



const Rect = ({ data, x, y, height, top, bottom }) => {
    return (
        <g transform={`translate(${x(data.Origin)}, ${y(data.ocurrencesOrigin)})`}>
            <rect
                width={x.bandwidth()}
                height={height - bottom - top - y(data.ocurrencesOrigin)}
                fill={d3.color('red')}
                key={data.Years + 'rect'}
            />
            <text
                transform={`translate(${x.bandwidth() / 2}, ${-2})`}
                textAnchor="middle"
                alignmentBaseline="baseline"
                fill="grey"
                fontSize="10"
                key={data.Years + 'text'}
            >
                {format(data.ocurrencesOrigin)}
            </text>
        </g>
    );
};

export const PlacesBar = ({ data, width, height, top, bottom, left, right }) => {
    const [sort] = useState(true);

    //TODO: set data to small caps

    const dataPlot = sort
        ? [...data].sort((a, b) => b.Origin - a.Origin)
        : [...data];

    //format
    const lowercaseOrigins = dataPlot.map(d => d.Origin.toLowerCase());
    console.log(lowercaseOrigins)
    const newData = dataPlot;
    const OriginOcu = dataPlot.map(d => dataPlot.filter(x => x.Origin === d.Origin).length);
    newData.forEach((d, i) => { d['ocurrencesOrigin'] = OriginOcu[i] });
    newData.forEach((d, i) => { d.Origin = lowercaseOrigins[i] });
    // console.log('newData', newData);

    const x = d3
        .scaleBand()
        .range([0, width - left - right])
        .domain(dataPlot.map(d => d.Origin))
        .padding(0.1)

    const y = d3
        .scaleLinear()
        .range([height - top - bottom, 0])
        .domain([0, d3.max(data, d => d.ocurrencesOrigin)])


    return (
        <>
            <svg width={width} height={height}>
                <XAxis
                    scale={x}
                    top={top}
                    bottom={bottom}
                    left={left}
                    right={right}
                    height={height}
                />
                <YAxis
                    scale={y}
                    top={top}
                    bottom={bottom}
                    left={left}
                    right={right}
                    width={width}
                />
                <g key={Math.random() * 1000} transform={`translate(${left}, ${top})`}>
                    {newData.map((d, i) => {
                        return (<Rect
                            key={'rect' + i}
                            data={d}
                            x={x}
                            y={y}
                            top={top}
                            bottom={bottom}
                            height={height}
                        />)
                    })
                    }
                </g>
                {/* <text
                    transform={`translate(${width / 2},${height - bottom + 40})`}
                    textAnchor="middle"
                    alignmentBaseline="baseline"
                    fill="grey"
                    fontSize="12"
                    key={'text x'}
                >
                    {'Origin'}
                </text> */}
                <text
                    transform={`rotate(-90 )`}
                    textAnchor="middle"
                    alignmentBaseline="baseline"
                    y={left - 40}
                    x={0 - (height / 2)}
                    fill="grey"
                    fontSize="12"
                    key={'text y'}
                >
                    {'People'}
                </text>
            </svg>
        </>
    );
};

const XAxis = ({ top, bottom, left, right, height, scale }) => {
    const axis = useRef(null);

    useEffect(() => {
        d3.select(axis.current).call(d3.axisBottom(scale)).selectAll('text').style("text-anchor", "end")
            .attr("dx", "-.8em")
            .attr("dy", ".15em")
            .attr("transform", function (d) {
                return "rotate(-65)"
            });
    });

    return (
        <g
            className="axis x"
            ref={axis}
            transform={`translate(${left}, ${height - bottom})`}
        />
    );
};

const YAxis = ({ top, bottom, left, right, width, scale }) => {
    const axis = useRef(null);

    useEffect(() => {
        d3.select(axis.current).call(d3.axisLeft(scale)
            .tickSize(-width, 0, 0)
            .tickFormat(d3.format(".0s")));

    });

    return (
        <g className="axis y" ref={axis} transform={`translate(${left}, ${top})`} />
    );
};

