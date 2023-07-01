
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
//Components
import Destination from './components/Destination'
import Destinations from './components/Destinations'
import Continents from './components/Continents'


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/continents' element={<Continents/>} />
          <Route path='/continents/:name' element={<Destinations/>} />
          <Route path='/continent/:name' element={<Destination/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;