import "./App.css";
import {Routes, Route} from "react-router-dom";
import {Home, Notes} from "./pages";

function App() {
  return (
    <div className="App light-theme">
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/notes"} element={<Notes />} />
      </Routes>
    </div>
  );
}

export default App;
