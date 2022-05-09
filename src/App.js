import "./App.css";
import {Routes, Route} from "react-router-dom";
import {Home, Notes, Archive, Trash} from "./pages";

function App() {
  return (
    <div className="App light-theme">
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/notes"} element={<Notes />} />
        <Route path={"/archive"} element={<Archive />} />
        <Route path={"/trash"} element={<Trash />} />
      </Routes>
    </div>
  );
}

export default App;
