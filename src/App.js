import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./components/Details";
import Home from "./components/Home";
import Navbar from "./components/Navbar";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/details/:id" element={<Details />}/>
        </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
