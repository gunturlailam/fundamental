import { useContext } from "react";
import { UserContext } from "../components/UserContext";

function Profile() {
  const {user,setUser} = useContext(UserContext);

  return (
    <div>
      <h2>Profile</h2>
      <p>Nama: {user.name}</p>
      <p>Umur: {user.age}</p>
      <button onClick={() => setUser({...user,age: user.age + 1})}>
        Tambah Umur
      </button>
    </div>
  );
}

export default Profile;