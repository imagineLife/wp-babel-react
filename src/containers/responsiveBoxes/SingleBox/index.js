import React from 'react'

const SingleBox = ({boxWrapperClass, boxClassName, boxTxt}) => {
	return(<div className={boxWrapperClass}>
	  <div className={`box ${boxClassName}`}>{boxTxt}</div>
	</div>)
} 

export default SingleBox;