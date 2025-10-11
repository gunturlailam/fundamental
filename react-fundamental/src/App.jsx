// state dasar
// import {useState} from "react"

// function App(){
//   const [message, setMessage]  = useState("Halo, React!")

//   return(
//     <div>
//       <h1>{message}</h1>
//       <button onClick={() => setMessage("State telah berubah!")}>
//         Ubah Pesan
//       </button>
//     </div>
//   )
// }

// export default App


// state dengan angka (counter)
// import { useState } from "react";

// function App(){
//   const [count, setCount] = useState(0)

//   return(
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={() => setCount(count + 1 )}>Tambah</button>
//       <button onClick={() => setCount(count - 1 )}>Kurang</button>
//     </div>
//   )
// }

// export default App


// state simpan array dan object
import { useState } from "react";

function App(){
  const [todos,setTodos] = useState(["Belajar React","Belajar JSX"])

  const addTodo = () => {
    setTodos([...todos, "Belajar State"])
  }

  return(
    <div>
      <h1>Daftar Todo:</h1>
      <ul>
        {todos.map((todo,index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
      <button onClick={addTodo}>Tambah todo</button>
    </div>
  )
}

export default App