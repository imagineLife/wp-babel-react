import React from 'react'; 


/* Loads app config file */

const useAppConfig = () => {
	let [ appConfig, setAppConfig ] = React.useState(null)

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