import React, { useState, useContext, useEffect } from 'react'
import { useQuery } from '@apollo/client';
import { LOAD_DATA } from './GraphQl/Queries.js';
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
	const { data, loading } = useQuery(LOAD_DATA)
	const [continents, setContinents] = useState([])

	useEffect(() => {
		if (!loading && data) {
			setContinents(data.continents)
		}

	}, [data, loading, continents])


	return (
		<AppContext.Provider value={{
			continents

		}}>
			{children}
		</AppContext.Provider>
	)
}


export const useGlobalContext = () => {
	return useContext(AppContext)
}

export { AppContext, AppProvider }