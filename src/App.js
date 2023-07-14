import React ,{useState} from 'react';
import Person from './Components/Person'
import './CSS/App.css'


function App() {

  const [persons, setPersons] = useState([
          
      {id:1, Name:'Selva', age:'11'},
      {id:2, name:'Suryaa', age:'18'},
      {id:3, name:'Thiru', age:'58'},

    ]
  )

  // const deleteHandler = (id) =>{
  //   let deleted = persons.filter(del=>del.id != id)
  //   let newPersons = {...persons};
  //   setPersons(newPersons[deleted]);

    
  //   console.log('click')
  // }
  const nameChangeHandler= (event) =>{
    // let newper = [...persons];
     setPersons(
      {id:1, Name:'Selva', age:'11'},
      {id:2, name:event.target.value, age:'18'},
      {id:3, name:'Thiru', age:'58'},
  
     )
    }

  return (
    
     
    <div>
      
    
      {/* <Person  name={persons[0].name}
       age={persons[0].age}
        // delete={(id)=>deleteHandler(id)}
        /> */}
      <Person name={persons[0].Name} age={persons[1].age} changed={(event) =>nameChangeHandler(event)}/>
      {/* <Person name={persons[2].name} age={persons[2].age} /> */}


    </div>
  
  );
}

export default App;
