import { HashRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Navigationbar from './Components/Navigationbar/Navigationbar';
import Aboutpage from "./Pages/Aboutpage/Aboutpage";
import Demopage from "./Pages/Demopage/Demopage";
import Docspage from "./Pages/Docspage/Docspage";
import Homepage from './Pages/Homepage/Homepage';

function App() {
  return (
    <div className="App">
      <Navigationbar />
      <HashRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Homepage/>}></Route>
          <Route path="/about" element={<Aboutpage/>}></Route>
          <Route path="/documentation" element={<Docspage/>}></Route>
          <Route path="/demo" element={<Demopage/>}></Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
