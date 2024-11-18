import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import Home from './Pages/Home';
import Error from './Pages/Error';

function App() {
  return (
    <Router>
      <div className="App">
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/*" element={<Error></Error>}></Route>
      </Routes>
      </div>
    </Router>
  );
}

export default App;
