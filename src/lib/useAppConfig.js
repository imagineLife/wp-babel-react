import React from 'react'; 

const useAppConfig = () => {
	console.log('use app config here!');
	let [ appConfig, setAppConfig ] = React.useState(null)
	
	/*
		"onLoad", load the appconfig file
	*/
	React.useEffect(() => {
		fetch(`./appconfig/config.js`)
		.then(res => res.json()) 
		.then(res => {
			setAppConfig(res[0]['dev'])	
		})

	}, [])

	return appConfig
}

export { useAppConfig }