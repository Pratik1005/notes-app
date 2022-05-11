import "./App.css";
import {Routes, Route} from "react-router-dom";
import {Home, Notes, Archive, Trash, Login} from "./pages";

function App() {
  return (
    <div className="App light-theme">
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/notes"} element={<Notes />} />
        <Route path={"/archive"} element={<Archive />} />
        <Route path={"/trash"} element={<Trash />} />
        <Route path={"/login"} element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
