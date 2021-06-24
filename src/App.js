
import { useGlobalContext } from './context'
import Continent from './Continent';

function App() {
	const { continents } = useGlobalContext()

	return (
		<main className="main">
			<h1 className="main__title">Continents and Countries</h1>
			<div className="main-continents">
				{/* return our continents */}
				{continents.map((continent) => {
					return (
					<Continent key={continent.code} {...continent}/>
					)
				})}

			</div>
		</main>
	)
}

export default App;
