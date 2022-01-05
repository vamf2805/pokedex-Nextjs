import Link from 'next/link'

const Card = ({pokemon}) =>{

	return(
		<section className="text-gray-600 body-font container mx-auto py-20">
				<div className="grid grid-cols-4 gap-5">
					{pokemon.map((item,index) =>(
						<Link href={`pokemon/${index + 1}`} key={index}>
							<div className="rounded-xl overflow-hidden shadow-xl cursor-pointer grid grid-cols-1 items-center bg-gray-600" key={item.name}>
								<div className="flex justify-center py-5">
									<img className="object-cover object-center w-40" src={`${item.url_imagen}.png`} alt={item.name}/>
								</div>
								<div className="my-5 text-center">
									<h2 className="text-2xl text-white capitalize font-bold">{item.name}<span className="text-sm"> #{index + 1}</span></h2>
								</div>
							</div>
						</Link>
					))}
				</div>
		</section>
	)
}
export default Card