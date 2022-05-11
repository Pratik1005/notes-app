import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import {ToastContainer} from "react-toastify";
import {Routes, Route} from "react-router-dom";
import {RequiresAuth} from "./components";
import {Home, Notes, Archive, Trash, Login} from "./pages";

function App() {
  return (
    <div className="App light-theme">
      <ToastContainer autoClose={1000} />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route
          path={"/notes"}
          element={
            <RequiresAuth>
              <Notes />
            </RequiresAuth>
          }
        />
        <Route
          path={"/archive"}
          element={
            <RequiresAuth>
              <Archive />
            </RequiresAuth>
          }
        />
        <Route
          path={"/trash"}
          element={
            <RequiresAuth>
              <Trash />
            </RequiresAuth>
          }
        />
        <Route path={"/login"} element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
