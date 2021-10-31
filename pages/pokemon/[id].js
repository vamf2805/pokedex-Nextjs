import axios from "axios"
import { useRouter } from "next/router"
import Link from "next/link"

const Pokemon = ({data, pokeId, url_imagen}) =>{

    return(
        <div className="container mx-auto py-20">
            <div className="grid grid-cols-3 rounded-lg border-2 border-gray-200">
                <div className="bg-red-500">
                    <img src={`${url_imagen}.png`} alt="" />
                </div>
                <div className="border-l col-span-2 text-center bg-gray-600 p-10">
                    
                    <h2 className="text-white text-center capitalize text-3xl">{data.name} <span className="text-lg">N.º{pokeId}</span></h2>
                    {data.types.length > 1 ? (
                        <p className="text-center text-lg text-white">Tipo: {data.types[0].type.name}/{data.types[1].type.name}</p>
                        
                    )
                    : 
                    (
                        <p className="text-center text-lg text-white">Tipo: {data.types[0].type.name}</p>
                    )}
                    <div className="text-center text-lg grid grid-cols-2 text-white gap-5 pt-10">
                        <p>Hp :{data.stats[0].base_stat}</p>
                        <p>Ataque: {data.stats[1].base_stat}</p>
                        <p>Defensa: {data.stats[2].base_stat}</p>
                        <p>Ataque Especial: {data.stats[3].base_stat}</p>
                        <p>Defensa Especial: {data.stats[4].base_stat}</p>
                        <p>Velocidad: {data.stats[5].base_stat}</p>
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
