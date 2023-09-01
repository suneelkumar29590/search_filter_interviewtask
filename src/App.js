import logo from './logo.svg';
import './App.css';
import Users from './components/users'
import { Routes,Route } from 'react-router-dom';
import Resize from './resizetask'
import Doubt from './interview'
import Fillter from './components/searchsingalepage';


function App() {
  return (
    <div className="App">
      <Routes>
      <Route exact path='/' element={< Users/>}/>
      <Route exact path='/resize' element={< Resize/>}/>
      <Route exact path='/doubt' element={< Doubt/>}/>
      <Route exact path='/single' element={<Fillter />}/>
      </Routes>
    </div>
  );
}

export default App;
