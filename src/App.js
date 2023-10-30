
import './App.css';
import PokeData from './components/PokeData'
import Card from './components/Card';
import './components/style.css'
import PokeView from './components/PokeView'
import { Routes, Route } from "react-router-dom"
function App() {
  return (
    <div className="App">
       <Routes> {/* Opening tag*/}
        <Route path="/" element={<PokeData />} />
        <Route path="/PokeView/:name" element={<PokeView />} />
      </Routes>{/* Closing tag*/}
    </div>
  );
}

export default App;
