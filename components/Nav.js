const Nav = () =>{
    return(
        <header className="bg-red-500 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <img src="/images/pokemon_ico.png" alt="pokemon" />
                    <span className="text-white ml-3 text-xl">Pokedex Next js</span>
                </a>
            </div>
        </header>
    )
}
export default Nav