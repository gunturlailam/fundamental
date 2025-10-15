// event onClick
// function App(){
//   const handleClick = () => {
//     alert("Tombol diklik!");
//   }

//   return (
//     <div>
//       <button onClick={handleClick}>Klik saya</button>
//     </div>
//   )
// }

// export default App



// event onChange
// import { useState } from "react";

// function App(){
//   const [name, setName] = useState("")

//   const handleChange = (event) => {
//     setName(event.target.value)
//   }

//   return(
//     <div>
//       <input type="text" placeholder="Ketik nama...." onChange={handleChange} />
//       <p>Halo, {name}</p>
//     </div>
//   )
// }

// export default App



// event onSubmit
// import { useState } from "react";

// function App(){
//   const [email, setEmail] = useState("")

//   const handleSubmit = (event) => {
//     event.preventDefault(); // mencegah reload halaman
//     alert(`Email dikirim: ${email}`);
//   }

//   return(
//     <form onSubmit={handleSubmit}>
//       <input 
//       type="email" 
//       placeholder="Masukkan Email"
//       value={email}
//       onChange={(e) => setEmail(e.target.value)}
//       />
//         <button type="submit">Kirim</button>
//     </form>
//   )
// }

// export default App


// event dengan Paramaeter
function App(){
  const sayHello = (name) => {
    alert(`Halo, ${name}!`)
  }

  return(
    <div>
      <button onClick={() => sayHello("Budi")}>Sapa Budi</button>
      <button onClick={() => sayHello("Siti")}>Sapa Siti</button>
    </div>
  )
}

export default App