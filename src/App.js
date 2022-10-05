import './App.css';
import { Home, User } from './Pages'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} ></Route>
        <Route path='/:user' element={<User />} ></Route>
      </Routes>
    </div>
  );
}

export default App;
