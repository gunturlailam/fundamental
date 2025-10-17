// membungkus component dengan provider
import { useState } from "react";
import { UserContext } from "./components/UserContext";
import Profile from "./components/Profile";

function App() {
  const [user, setUser] = useState({ name: "Budi", age: 20 });

  return (
    <UserContext.Provider value={{user, setUser}}>
      <div>
        <h1>Aplikasi React Context</h1>
        <Profile />
      </div>
    </UserContext.Provider>
  );
}

export default App;
