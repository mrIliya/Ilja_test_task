import React, { useState } from 'react';

const Country = ({ name, languages }) => {
	const [showLanguage, setShowLanguage] = useState(false)

	return (
		<li className="main-continents__country">
			<span className="main-continents__country-name"
				onClick={() => setShowLanguage(!showLanguage)}
			>{name}</span>
			{/* return our languages */}
			{showLanguage && languages.map(({ name, code }) => {
				return (
					<span key={code} className="main-continents__language">{name}</span>
				)
			})}
		</li>
	)
}
export default Country