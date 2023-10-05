import Pokemon from './compoments/pokemon'

async function getData() {
  const res = await fetch('http://localhost:3000/api/pokemon')

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function Home() {
  const data = await getData()
  return (
    <main className="bg-gray-50 grid grid-cols-2 md:grid-cols-3 gap-8 min-h-screen p-8 md:p-24">
      {
        data.data.results.map((pokemon) => <Pokemon className="" pokemon={pokemon}/>)
      }
    </main>
  )
}
