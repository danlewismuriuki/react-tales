export function Time() {
  const date = new Date();
  const hour  = date.getHours();

  if (hour >= 6  && hour < 12) {
    return <h1>Good Morning</h1>
  }
  else if (hour >= 12 && hour < 17) {
    return <h1>Good Afternoon</h1>
  }
  else {
  return <h1>Good Evening</h1>
}
}

export function App () {
  return (
    <Time />
  )
}

export default App;