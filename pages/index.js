import axios from "axios"
import Card from "../components/Card"

export default function Home({pokemon}) {

  	return (
		<div className="bg-gray-50">
			<Card pokemon={pokemon}/>
    	</div>
  	)
}

export async function getStaticProps(){
	const { data } = await axios.get(
		`https://pokeapi.co/api/v2/pokemon?limit=151`
	  );
	
	const { results } = data
	const pokemon = results.map((poke, index)=>{
		const pokeId = (`00${index +1}`).slice(-3)
		const url_imagen = `http://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokeId}`

		return{ ...poke, url_imagen}
	})
	
	  return {
		props: {
			pokemon,
		},
	  };
}