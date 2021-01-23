import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";

const colors = d3.scaleOrdinal(d3.schemeCategory10);
const format = d3.format(".2");

const XAxis = ({ top, bottom, left, right, height, scale }) => {
    const axis = useRef(null);

    useEffect(() => {
        d3.select(axis.current).call(d3.axisBottom(scale));
    });

    return (
        <g
            className="axis x"
            ref={axis}
            transform={`translate(${left}, ${height - bottom})`}
        />
    );
};

const YAxis = ({ top, bottom, left, right, scale }) => {
    const axis = useRef(null);

    useEffect(() => {
        d3.select(axis.current).call(d3.axisLeft(scale));
    });

    return (
        <g className="axis y" ref={axis} transform={`translate(${left}, ${top})`} />
    );
};

const Rect = ({ data, x, y, height, top, bottom }) => {
    return (
        <g transform={`translate(${x(data.Years)}, ${y(data.ocurrences)})`}>
            <rect
                width={x.bandwidth()}
                height={height - bottom - top - y(data.ocurrences)}
                fill={colors(data.index)}
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
                {format(data.ocurrences)}
            </text>
        </g>
    );
};

export const Bar = ({ data, width, height, top, bottom, left, right }) => {
    const [sort] = useState(true);

    const dataPlot = sort
        ? [...data].sort((a, b) => b.Years - a.Years)
        : [...data];

    //format
    const ocu = dataPlot.map(d => dataPlot.filter(x => x.Years === d.Years).length);
    const newData = dataPlot;
    newData.forEach((d, i) => { d['ocurrences'] = ocu[i] });
    const sortedData = newData.sort((a, b) => a.Years - b.Years);
    console.log(sortedData);

    const x = d3
        .scaleBand()
        .range([0, width - left - right])
        .domain(dataPlot.map(d => d.Years))
        .padding(0.1);

    const y = d3
        .scaleLinear()
        .range([height - top - bottom, 0])
        .domain([0, d3.max(data, d => d.ocurrences)])
    // .domain([0, d3.max(data, d => d.Origin)]);
    // .domain(data.map(d => d.Years))

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
                />
                <g key={Math.random() * 1000} transform={`translate(${left}, ${top})`}>
                    {sortedData.map((d, i) => {
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
            </svg>
        </>
    );
};

export default Bar;