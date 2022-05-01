import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Homepage from './components/Homepage';


function App() {
  return (
    <div className="App">
     <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />} />
        
          </Routes>
    </BrowserRouter>


    </div>
  );
}

export default App;
