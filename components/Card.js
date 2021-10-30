import Link from 'next/link'

const Card = ({pokemon}) =>{

	return(
		<section className="text-gray-600 body-font container mx-auto py-20">
				<div className="grid grid-cols-4 gap-5">
					{pokemon.map((item,index) =>(
						<Link href={`pokemon/${index + 1}`}>
							<div className="border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden bg-white shadow-xl p-2 cursor-pointer" key={item.name}>
								<div>
									<img className="object-cover object-center" src={`${item.url_imagen}.png`} alt={item.name}/>
								</div>
								<div className="my-5 text-center">
									<h2 className="text-xl capitalize font-bold">{item.name}<span className="text-sm"> #{index + 1}</span></h2>
								</div>
							</div>
						</Link>
					))}
				</div>
		</section>
	)
}
export default Card