import Image from "next/image";
import Link from "next/link";

const COLORS = {
    grass: 'bg-grass',
    fire: 'bg-fire',
    water: 'bg-water',
    bug: 'bg-bug',
    normal: 'bg-normal'
}
const BORDER_COLORS = {
    grass: 'border-grass',
    fire: 'border-fire',
    water: 'border-water',
    bug: 'border-bug',
    normal: 'border-normal'
}

export default function Pokemon({ pokemon }) {
    return (
        <Link href={`/pokemon/${pokemon.name}`} >

            <div className={`p-1 md:p-3 group border-solid border-4 rounded-xl border-${pokemon.type}`} key={pokemon.id}>
                <div className="pl-2 font-medium">#{String(pokemon.id).padStart(3, '0')}</div>
                <Image className="m-auto group-hover:scale-105 transition duration-300"
                    src={pokemon.image}
                    width={250}
                    height={250}
                    alt={pokemon.name}
                />
                <h1 className={`transition font-medium tracking-wider text-md md:text-2xl text-gray-100 bg-${pokemon.type} rounded-md text-center py-2 md:p-4 capitalize`}>{pokemon.name}</h1>
            </div>
        </ Link>
    )
}