// meggunakan if/else
// function App(){
//   const isLoggedIn = true;

//   if(isLoggedIn){
//     return <h1>Selamat datang kembali!</h1>
//   }else{
//     return <h1>Silahkan login terlebih dahulu</h1>
//   }
// }

// export default App


// menggunakan operator ternary
// function App(){
//   const isLoggedIn = false

//   return(
//     <div>
//       {
//         isLoggedIn ? <h1>Dashboard</h1> : <h1>Login Page</h1>
//       }
//     </div>
//   )
// } 

// export default App


// menggunakan operator &&
// function App(){
//   const showMessage = true

//   return(
//     <div>
//       <h1>Halo,React!</h1>
//       {
//         showMessage && <p>Pesan ini hanya muncul jika showMessage = true</p>
//       }
//     </div>
//   )
// }

// export default App


// mwnggunakan state
import { useState } from "react";

function App(){
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    return (
      <div>
        {
          isLoggedIn ? (
            <h2>Selamat datang kembali!</h2>
          ) : (
            <h1>Silahkan login terlebih dahulu.</h1>
          )
        }
        
        <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
          {isLoggedIn ? "Logout" : "Login"}
        </button>
      </div>
    )
}

export default App