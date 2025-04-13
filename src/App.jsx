export function WelcomeBox({ message = "Welcome!", handleWelcome }) {
  return (
    <div onClick={ () => handleWelcome(message)}>
      {message}
    </div>
  );
}

export function App() {
  return (
    <WelcomeBox
      message="Click to Welcome"
      handleWelcome={(msg) => alert(`Message: ${msg}`)}
    />
  );
}


export default App;