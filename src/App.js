
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import AddUser from './components/AddUser/AddUser';

function App() {
  return (
    <div className="App">
      
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path="/user/add" element={<AddUser></AddUser>}></Route>
    </Routes>
    </div>
  );
}

export default App;
