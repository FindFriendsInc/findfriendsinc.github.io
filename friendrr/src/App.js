import { BrowserRouter, Routes, Route } from "react-router-dom";
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
      <BrowserRouter>
        <Routes>
          <Route path="findfriendsinc.github.io/" element={<Homepage/>}></Route>
          <Route path="findfriendsinc.github.io/about" element={<Aboutpage/>}></Route>
          <Route path="findfriendsinc.github.io/documentation" element={<Docspage/>}></Route>
          <Route path="findfriendsinc.github.io/demo" element={<Demopage/>}></Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
