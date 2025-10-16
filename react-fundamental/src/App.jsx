// controlled component
// import { useState } from "react";

// function App(){
//     const [name, setName] = useState("")

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         alert(`Nama:${name}`)
//     }

//     return(
//         <form onSubmit={handleSubmit}>
//             <input 
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             placeholder="Masukkan Nama" />
//             <button type="submit">Kirim</button>
//         </form>
//     )
// }

// export default App


// uncontrolled component
// import { useRef } from "react";

// function App(){
//     const nameRef = useRef()

//     const handleSubmit = (event) => {
//         event.preventDefault()
//         alert(`Nama: ${nameRef.current.value}`)
//     }

//     return(
//         <form onSubmit={handleSubmit}>
//             <input type="text" ref={nameRef} placeholder="Masukkan Nama" />
//             <button type="submit">Kirim</button>
//         </form>
//     )
// }

// export default App


// form dengan beberapa input
import { useState } from "react";

function App(){
    const [form, setForm] = useState({email:"",password: ""});

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        alert( `Email:  ${form.email}, Password: ${form.password}`)
    }

    return(
        <form onSubmit={handleSubmit}>
            <input 
            type="email"
            name="email"
            placeholder="Masukkan Email"
            value={form.email}
            onChange={handleChange} />
            <input 
            type="password"
            name="password"
            placeholder="Masukkan Password" 
            value={form.password}
            onChange={handleChange}/>
            <button type="submit">Login</button>
        </form>
    )
}

export default App