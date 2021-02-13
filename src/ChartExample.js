import React, { useState, useEffect, useRef } from 'react';
import * as d3 from 'd3';
import data from './dataT.csv'

// 
export const Chart = () => {
    const ref = useRef();
    const [data, setData] = useState(null);
    const colors = d3.scaleOrdinal(d3.schemeCategory10);
    const format = d3.format(".2f");


    useEffect(() => {

        const readData = async () => (
            d3.csv(data).then(function (data) {
                setData(data)
            })

        )
        readData();
        // console.log(data)
    }, [])


    // console.log(ref.current);
    ref.current && d3.select(ref.current)
        .data(data)
        // // .enter()
        // .append('p')
        // .text((datapoint) => datapoint + 'age')
        .append("p")
        .text("bananas")

    return (
        <div ref={ref}>

        </div>
    )
}