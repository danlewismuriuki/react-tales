import React, {useState} from 'react'

function App() {
  const [Person, setPerson] = useState({firstName: 'Dan', lastName: 'Muriuki'})

  const handleFirstName = (e) => {
    setPerson(prev => ({ ...prev, firstName: e.target.value}))
  } 

  const handlelastName = (e) => {
    setPerson(prev => ({ ...prev, lastName: e.target.value}))
  } 

  return (
    <div>
      <input
        type="text"
        value={Person.firstName}
        onChange={handleFirstName}
        placeholder='First Name'
      />

    <input
        type="text"
        value={Person.lastName}
        onChange={handlelastName}
        placeholder='Last Name'
      />


<h2> {`${Person.firstName} ${Person.lastName}`}</h2>

    </div>
  )
}

export default App;