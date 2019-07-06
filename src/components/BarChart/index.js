import React from 'react';
import './index.css'
const BarChart = ({data, xScale, yScale, dims}) => {
	
	return(
		<svg 
			id="bar-chart-wrapper" 
			width={dims.w} 
			height={dims.h}>

			{/* If No Data, show placeholder text*/}

			{!data && <text x="50" y="50">loading data...</text>}
			
			{/* If data, show bars */}
			{data && data.map((d, ind) => {
		
				let thisKey = Object.keys(d)[0]
						
				return(
					<rect 
						className="single-bar"
						key={`${thisKey}${ind}`} 
						x={xScale(thisKey)} 
						y={yScale(d[thisKey])}
						height={dims.h - yScale(d[thisKey])}
						fill={'steelblue'}
						width={xScale.bandwidth()}/>
				)
			})}
		</svg>
	)
}

export default BarChart;