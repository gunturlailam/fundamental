// React.Memo
// import React, {useState} from "react";

// const Child = React.memo(({name}) => {
//     console.log("Render Child")
//     return <h2>Halo, {name}</h2>
// })

// function App(){
//     const [count,setCount] = useState(0)

//     return(
//         <div>
//             <Child name="Budi"/>
//             <p>Count: {count}</p>
//             <button onClick={() => setCount(count+1)}>Tambah</button>
//         </div>
//     )
// }

// export default App


// useMemo
// import { useState, useMemo } from "react";

// function App(){
//     const [count, setCount] = useState(0)
//     const [other, setOther] = useState(false)
    
//     const expensiveCalculation = (num) => {
//         console.log("Hitung ulang...")
//         for(let i = 0; i < 1000000000; i++ ){} //simulasi proses berat
//         return num * 2
//     }

//     const result = useMemo(() => expensiveCalculation(count),[count])

//     return(
//         <div>
//             <h1>Hasil: {result}</h1>
//             <button onClick={() => setCount(count+1)}>Tambah Count</button>
//             <button onClick={() => setOther(!other)}>Toggle Other</button>
//         </div>
//     )
// }

// export default App


// useCallback
import React ,{ useState, useCallback } from "react";

const Child = React.memo(({ onClick }) => {
    console.log("Render Child")
    return <button onClick={onClick}>Klik Anak</button>
})

function App(){
    const [count, setCount] = useState(0)

    const handleClick = useCallback(() => {
        console.log("Button diklik")
    },[])

    return(
        <div>
            <Child onClick={handleClick}/>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Tambah</button>   
        </div>
    )
}

export default App