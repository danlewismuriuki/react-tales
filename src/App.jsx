export function ProfileCard(props) {
  const style = {
    backgroundColor: props.bgColor,
    justifyContent: "center",
    alignItems: "center",
    border: "2px solid black",
  }
  
  return (
    <div style={style}>
      <h2>
        {props.name} <br/>
      </h2>
      <h2>
        {props.role} <br/>
        {props.location}
      </h2>
    </div>
  )
}

export function App() {

  const wrapperStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    backgroundColor: '#f5f5f5',
    padding: '20px'
  };


  return (
    <div style={wrapperStyle}>
    <ProfileCard
    name="Dan lewis"
    role="Backend Engineer"
    location="Nairobi Kenya"
    bgColor="lightBlue"
    />

    <ProfileCard
    name="Alex"
    role="FullStack Engineer"
    location="Nairobi Kenya"
    bgColor="lightBlue"
    />
    
    <ProfileCard
    name="Mark Alex"
    role="Frontend Engineer"
    location="Nairobi Kenya"
    bgColor="lightBlue"
    />
    </div>
  )
}

export default App;