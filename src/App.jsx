export function Notification ({message="This is a default message", bgColor="Yellow", onClickHandler}) {
  const style = {
    backgroundColor: bgColor,
    padding: "1rem",
    borderRadius: "4px",
    cursor: "pointer"
  }
  return(
    <div style={style} onClick={() => onClickHandler(message)}>
      {message}
    </div>
  );
}

export function App() {
  return (
    <Notification
    message="You have one message"
    bgColor = "green"
    onClickHandler ={(msg) => alert(`Notification says: ${msg}`)}
    />
  );
}

export default App;