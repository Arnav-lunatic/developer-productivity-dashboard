import { useDispatch } from "react-redux";
import NavBar from "./components/NavBar"
import { clearUserData, setUserData } from "./store/authSlice";
import { useEffect } from "react";


function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    fetch(
      "http://localhost:5000/api/user/data",
      {
        credentials: "include"
      }
    ).then(async (res) => {
        if (!res.ok) {
          dispatch(clearUserData());
          return;
        }
        const data = await res.json();
        dispatch(setUserData(data));
      })
      .catch(() => {
        dispatch(clearUserData());
      });
  }, []);

  return (
    <>
      <NavBar />
    </>
  )
}

export default App
