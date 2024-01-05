// import { useState } from "react"

// const title = "Ca va les gens ?"
// const title2 = "Il y a quelqu'un ?"
// const style = { color: 'blue', fontFamily: 'Arial' }
// const showTitle = true 
// const todo = [
//    'Terminer le tuto react',
//    'Aller à la salle', 
//    'Faire a manger'
// ]

// function App() {  
//   // **************    Exercice formulaire ******* 
//   const [firstName, setFirstName] = useState('Ivann Elore')
//   const handleChange = (e) => {
//     console.log(e.target)
//     setFirstName(e.target.value)
//   }

//   const [person, setPerson]= useState({
//     firstName: 'Ivann',
//     lastName: 'Elore',
//     age: 31
//   })

//   const increment = ()=>{
//    setPerson({...person, age: person.age + 1})
//   } 

//   const decrement = ()=>{
//     setPerson({...person, age: person.age - 1})
//   }
//   return <>
//    <form>
//     <input onChange={handleChange} type="text" name="firstName" value={firstName}/>
//   </form>

//     <p>Age de {person.firstName} {person.lastName} = {person.age} ans</p>
//     <button onClick={increment}>Happy BirthDay OK</button>
//     <button onClick={decrement}>Happy BirthDay KO </button>
  
//       <Title color="blue" >Mon texte parent</Title>
//     {showTitle ?
//       <h1 id="title" className="title" style={style}>{title}</h1> :
//       <h1 id="title" className="title" style={style}>{title2}</h1>
//     }
//     <input type="text" />
//     <p>
//       Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi cumque vitae sunt unde est placeat    earum quae similique, eos ratione nihil quaerat. Qui cum quaerat dolor incidunt, tenetur eum sequi?
//     </p>
//     <ul>
//       {todo.map(todo => (<li key={todo} >{todo}</li> ))} 
//     </ul>
//   </>  
// } 

// function Title ({color, children, hidden}){ 
    
//     const props = {
//       id: 'idH1',
//       className: 'classH1'
//     } 

//     const handleClick = ()=> {
//       alert ("J'ai clické sur le titre")
//     }

//     if (hidden){
//       return null
//     }

//     return <h1 onClick={handleClick} style={{color: color}} {...props} > {children} </h1> 

// }

// export default App
