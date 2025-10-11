// menggunakan props di komponen
// function Welcome(props){
//   return <h1>Halo, {props.name}</h1>
// }

// function App(){
//   return(
//     <div>
//       <Welcome name="Guntur"/>
//       <Welcome name="Lailam"/>
//       <Welcome name="Yuro"/>
//     </div>
//   )
// }

// export default App



// menggunakan beberapa props
function UserCard(props){
  return(
    <div>
      <h2>{name}</h2>
      <p>Umur: {page}</p>
    </div>
  )
}

function App(){
  return(
    <div>
      {/* destructring props */}
      <UserCard name="Guntur" age={23}/>
      <UserCard name="Gilang" age={20}/>
    </div>
  )
}

export default App
