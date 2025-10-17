// CUSTOM HOOK SEDERHANA
// import useWindowWidth from "./hooks/useWindowWidth";

// function App(){
//   const width = useWindowWidth()

//   return(
//     <div>
//       <h1>Lebar Jendela: {width}px</h1>
//     </div>
//   )
// }

// export default App


// CUSTOM HOOK AGAK KOMPLEKS
import useForm from "./hooks/useForm";

function App(){
  const {values, handleChange, resetForm} = useForm({
    email: "",
    password:""
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Email: ${values.email}, Password"${values.password}`)
    resetForm()
  } 

  return(
    <form onSubmit={handleSubmit}>
      <input 
      type="email"
      name="email"
      value={values.email}
      onChange={handleChange}
      placeholder="Email"
      />
      <input 
      type="password"
      name="password"
      value={values.password}
      onChange={handleChange}
      placeholder="Password" />
      
      <button type="submit">Login</button>
    </form>
  )
}

export default App