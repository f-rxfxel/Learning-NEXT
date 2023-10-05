async function getData({ name }) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export default async function Pokemon({ params }) {
    const pokemon = await getData({ name: params.name })
    return <div>Stats
        <ul>
            {pokemon.stats.map(stat => (
                <li className="flex gap-3">
                    {stat.base_stat}:
                    <div className="block w-[100px] h-5 bg-white relative">
                        <span></span>
                    </div>
                </li>
            ))}
    </ul>
    </div >
}