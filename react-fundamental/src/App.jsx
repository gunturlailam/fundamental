// useRef mengakses DOM
// import { useRef } from "react";

// function App(){
//     const inputRef = useRef()

//     const focusInput = () => {
//         inputRef.current.focus()
//     }

//     return(
//         <div>
//             <input type="text" ref={inputRef} placeholder="Ketik sesuatu..."/>
//             <button onClick={focusInput}>Fokus ke input</button>
//         </div>
//     )
// }

// export default App


// useRef menyimpan nilai tanpa re-render
// import {useRef, useState} from "react"

// function App(){
//     const [count, setCount] = useState(0)
//     const renderCount = useRef(0)

//     renderCount.current += 1

//     return(
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={() => setCount(count+1)}>Tambah</button>
//             <p>Component dirender sebanyak: {renderCount.current} kali</p>
//         </div>
//     )
// }

// export default App


// useRef menyimpan data sebelumnya
import { useState, useEffect, useRef } from "react";

function App(){
    const [count, setCount] = useState(0)
    const prevCount = useRef()

    useEffect(() => {
        prevCount.current = count
    }, [count])

    return(
        <div>
            <h1>Count sekarang: {count}</h1>
            <h2>Count sebelumnya: {prevCount.current}</h2>
            <button onClick={() => setCount(count+1)}>Tambah</button>
        </div>
    )
}

export default App