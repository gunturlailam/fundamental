// CSS Modules
import styles from "./App.module.css";

function App() {
  return (
    <div>
      <h1 className={styles.title}>
        Halo, ini menggunakan CSS Modules (hijau)
      </h1>
    </div>
  );
}

export default App;

// Contoh lainnya (uncomment untuk mencoba):

// Inline style:
// function App(){
//   return (
//     <div>
//       <h1 style={{ color:"blue", fontSize: "24px"}}>
//         Halo, ini teks berwarna biru
//       </h1>
//     </div>
//   )
// }

// CSS eksternal:
// import "./App.css"
// function App(){
//   return <h1 className="title">
//     Halo, ini teks berwarna merah
//   </h1>
// }

// Styled Components (perlu install dulu: npm install styled-components):
// import styled from "styled-components";
// const Title = styled.h1`
//   color: purple;
//   text-decoration: underline;
// `;
// function App() {
//   return <Title>Halo, ini teks berwarna ungu</Title>;
// }
