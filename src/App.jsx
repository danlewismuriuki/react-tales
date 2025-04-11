export function Time () {

  const currentHour = new Date().getHours();

  if (currentHour < 12)
    return <h1>Good Morning</h1>
    else
    return <h1>Good Evening</h1>
}

export function App () {
  return (
    <Time/>
  )
}

export default App;