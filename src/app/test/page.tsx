
async function getData() {
  const res = await fetch('https://httpbin.org/uuid')
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
  const data = await res.json()
  console.log("output",data.uuid)
  return data
}
 

export default async function Home() {
  const data = await getData()

  return (
    <div>
      <p>Test page {data.uuid}</p>
    </div>
  );
}
