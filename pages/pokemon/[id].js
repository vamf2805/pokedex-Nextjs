import axios from "axios"
import { useRouter } from "next/router"
import Link from "next/link"

const Pokemon = ({data, pokeId, url_imagen}) =>{

    return(
        <div className="container mx-auto py-8">
            <div className="grid grid-cols-3 rounded-lg border-2 border-gray-200">
                <div className="bg-red-500 flex items-center">
                    <img className="object-cover object-center" src={`${url_imagen}.png`} alt={data.name} />
                </div>
                <div className="border-l col-span-2 bg-gray-600 p-10">
                    
                    <h2 className="text-white text-center font-bold capitalize text-3xl">{data.name} <span className="text-lg">N.º{pokeId}</span></h2>
                    {data.types.length > 1 ? (
                        <p className="text-center text-lg text-white">Tipo: {data.types[0].type.name}/{data.types[1].type.name}</p>
                        
                    )
                    : 
                    (
                        <p className="text-center text-lg text-white">Tipo: {data.types[0].type.name}</p>
                    )}
                    <div className="text-lg text-white pt-10">
                        <div>
                            <p>Hp :{data.stats[0].base_stat}</p>
                            <progress className="w-full" max="150" value={data.stats[0].base_stat}></progress>
                        </div>
                        <div>
                            <p>Ataque :{data.stats[1].base_stat}</p>
                            <progress className="w-full" max="150" value={data.stats[1].base_stat}></progress>
                        </div>
                        <div>
                            <p>Defensa :{data.stats[2].base_stat}</p>
                            <progress className="w-full" max="150" value={data.stats[2].base_stat}></progress>
                        </div>
                        <div>
                            <p>Ataque especial :{data.stats[3].base_stat}</p>
                            <progress className="w-full" max="150" value={data.stats[3].base_stat}></progress>
                        </div>
                        <div>
                            <p>Defensa especial :{data.stats[4].base_stat}</p>
                            <progress className="w-full" max="150" value={data.stats[4].base_stat}></progress>
                        </div>
                        <div>
                            <p>Velocidad :{data.stats[5].base_stat}</p>
                            <progress className="w-full" max="150" value={data.stats[5].base_stat}></progress>
                        </div>
                    </div>
                    <div className="mt-10">
                        <Link href="/">
                            <a className="px-5 py-3 rounded-sm text-white bg-red-500">Regresar</a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Pokemon

export async function getStaticPaths(){
    const {data} = await axios('https://pokeapi.co/api/v2/pokemon?limit=151')
    const {results} = data

    
    const paths = results.map((poke,index) =>({
        params:{id:index.toString()}
    }))
    return{paths, fallback:true}
}

export async function getStaticProps({ params }){
    const {data} = await axios(`https://pokeapi.co/api/v2/pokemon/${params.id}`)
    const pokeId = (`00${params.id}`).slice(-3)
    const url_imagen = `http://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokeId}`


    return{
        props:{
            data,
            pokeId,
            url_imagen
        }
    }
}
