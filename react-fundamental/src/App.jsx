// list menggunakan map()
// function App(){
//   const names = ["Budi","Siti","Andi","Dewi"]

//   return(
//     <div>
//       <h1>Daftar Nama:</h1>
//       <ul>
//         {
//           names.map((name) => (
//             <li>{name}</li>
//           ))
//         }
//       </ul>
//     </div>
//   )
// }

// export default App


// key pada list
// function App(){
//   const names = ["Budi","Siti","Andi","Dewi "]

//   return(
//     <div>
//       <h1>Daftar Nama:</h1>
//       <ul>
//         {
//           names.map((name,index) => (
//             <li key={index}>{name}</li>
//           ))
//         }
//       </ul>
//     </div>
//   )
// }

// export default App


// list dengan object
// function App(){
//   const users = [
//     {id:1,name:"Budi",age:20},
//     {id:2,name:"Siti",age:22},
//     {id:3,name:"Andi",age:19},
//   ]

//   return(
//     <div>
//       <h1>Daftar User:</h1>
//       <ul>
//         {
//           users.map((user) => (
//             <li key={user.id}>
//               {user.name} - {user.age} tahun
//             </li>
//           ))
//         }
//       </ul>
//     </div>
//   )
// }

// export default App


// list dengan komponent terpisah
function UserItem({name,age}){
  return(
    <li>
      {name} - {age} tahun
    </li>
  )
}

function App(){
  const users = [
    {id:1,name:"Budi",age:20},
    {id:2,name:"Siti",age:22},
    {id:3,name:"Andi",age:19}
  ]

  return(
    <div>
      <h1>Daftar User:</h1>
      <ul>
        {
          users.map((user) => (
            <UserItem key={user.id} name={user.name} age={user.age}/>
          ))
        }
      </ul>
    </div>
  )
}

export default App