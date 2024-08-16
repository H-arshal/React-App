
import './App.css';
import About from './Pages/About';
import Homepage from './Pages/Homepage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
