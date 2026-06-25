import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import { useDispatch } from "react-redux";
import { clearUserData, setUserData } from "./store/authSlice";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("http://localhost:5000/api/user/data", {
      credentials: "include",
    })
      .then(async (res) => {
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
  }, [dispatch]);

  return (
    <>
      <NavBar />

      <main className="max-w-7xl mx-auto px-6 py-8">
        <Outlet />
      </main>
    </>
  );
}

export default App;