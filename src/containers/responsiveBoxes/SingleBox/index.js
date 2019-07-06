import React from 'react'

const SingleBox = ({boxWrapperClass, boxClassName, boxTxt}) => {

	const boxRef = React.useRef(null);

	React.useEffect(()=> {
		console.log('boxRef.current')
		console.log(boxRef.current)
		
	})

	return(<div className={boxWrapperClass}>
	  <div 
	  	className={`box ${boxClassName}`}
	  	ref={boxRef}
	  	>{boxTxt}</div>
	</div>)
} 

export default SingleBox;