export function AlertBox({message="This is a default message", bgColor, onAlert}) {
  const style = {
    backgroundColor: bgColor,
    padding: "1rem",
    cursor: "pointer",
    borderRadius: "5px"
  }

  return (
    <div style={style} onClick={onAlert(message)}>
      {message}
    </div>
    )
}

export function App() {
  return (
<AlertBox
message="Custom Alert"
bgColor="lightCoral"
onAlert={(msg) => alert(`Alert says: ${msg}`)}
/>
);
}
export default App;