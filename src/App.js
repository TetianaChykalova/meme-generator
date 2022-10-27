import './App.css';
// import Header from "./Components/Header/Header";
import {HashRouter, Navigate, Route, Routes} from "react-router-dom";
import Home from "./Components/Home";
import Cats from "./Components/Cats/Cats";
import Memes from "./Components/Memes/Memes";

function App() {
  return (
      <HashRouter>
          <div>
              <Routes>
                  <Route path='home' element={ <Home/> } />
                  <Route path='cats' element={ <Cats/> } />
                  <Route path='memes' element={ <Memes/> } />
                  <Route path='/' element={ <Navigate to='/home' replace /> } />
              </Routes>
          </div>
      </HashRouter>
  );
}

export default App;
