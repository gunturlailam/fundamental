// functional component

// function Welcome(){
//   return <h1>Halo, ini adalah component Welcome!</h1>
// }

// function App(){
//   return (
//     <div>
//       <Welcome/>
//       {/* reusable component */}
//       <Welcome/>
//       <Welcome/>
//     </div>
//   )
// }

// export default App;



// harus diawali huruf besar
// function Welcome(){
//   return <h1>Hello</h1>
// } 



// moduldarisasi komponent
import Header from "./components/Header";

function App(){
  return(
    <div>
      <Header/>
      <p>Halo,ini halaman utama React</p>
    </div>
  )
}

export default App