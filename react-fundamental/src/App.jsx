// // class biasa
// import "./App.css"

// function App(){
//   return <h1 className="title">Halo, React!</h1>
// }

// export default App


// class dinamis
// import { useState } from "react";
// import "./App.css"

// function App(){
//   const [isActive, setIsActive] = useState(false)

//   return(
//     <div>
//       <h1 className={isActive ? "active" : "inactive"}>Halo, React!</h1>
//       <button onClick={() => setIsActive(!isActive)}>
//         Toggle Class
//       </button>
//     </div>
//   )
// }

// export default App


// template literal
// import "./App.css"

// function App () {
//   const isDark = true

//   return(
//     <div className={`box ${isDark ? "dark" : "light"}`}>
//       Mode Tampilan
//     </div>
//   )
// }

// export default App


// library clsx
import clsx from "clsx";
import { useState } from "react";
import "./App.css"

function App(){
  const [active, setActive] = useState(false)

  return (
    <div>
      <h1 className={clsx("title", {active:active, inactive: !active})}>
        Halo, React!
      </h1>
      <button onClick={() => setActive(!active)}>Toggle Class</button>
    </div>
  )
}

export default App