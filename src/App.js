
import './App.css';
import ListEmployee from './components/ListEmployee';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
      <div className='container'>
        <Routes>
          <Route path='/' element={<ListEmployee/>}/>
          <Route path='/employees' element={<ListEmployee/>}/>
         
        </Routes>
      </div>
      </Router>
    </div>

  );
}

export default App;
