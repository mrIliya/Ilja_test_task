import React, { useState } from 'react'
import Country from './Country.js'

const Continent = ({ name, countries }) => {
	const [showCountry, setShowCountry] = useState(false)

	return (
		<ul className="main-continents__name">
			<h2 className="main-continents__title"
				onClick={() => setShowCountry(!showCountry)}
			>{name}</h2>

			{/* return our countries */}
			{showCountry && countries.map((country) => {
				return (
					<Country key={country.code} {...country} />
				)
			})}
		</ul>
	)
}

export default Continent