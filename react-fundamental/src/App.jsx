// useEffect tanpa dependencies
// import { useState, useEffect } from "react";

// function App(){
//     const [count, setCount] = useState(0);

//     useEffect(() => {
//         console.log("Component dirender ulang")
//     })

//     return(
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={() => setCount(count+1)}>Tambah</button>
//         </div>
//     )
// }

// export default App;


// useEffect dengan Array Kosong []
// import { useEffect } from "react";

// function App(){
//     useEffect(() => {
//         console.log("Component pertama kali dimuat")
//     }, [])

//     return <h1>Hello React</h1>
// }

// export default App


// useEffect dengan Dependencies
// import { useState, useEffect} from "react";

// function App(){
//     const [count, setCount] = useState(0)

//     useEffect(() => {
//         console.log(`Count berubah menjadi: ${count}`)
//     }, [count])

//     return(
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={() => setCount(count+1)}>Tambah</button>
//         </div>
//     )
// }

// export default App


// membersihkan efek(cleanup)
import { useEffect } from "react";

function App(){
    useEffect(() => {
        const interval = setInterval(() => {
            console.log("Interval berjalan...")
        },1000)

        // return dijalankan ketika component di-unmount
        return ()=> {
            clearInterval(interval)
            console.log("Interval dihentikan")
        }
    }, [])

    return <h1>Lihat console untuk interval.</h1>
}

export default App