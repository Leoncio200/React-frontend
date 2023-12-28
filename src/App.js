import logo from './logo.svg';
import './App.css';
import Component from './component';
import LoginForm from './Login/LoginForm';
import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom';
import Navbar from './Navbar/navbar';
import Register from './Register/register';
import User from './User/user';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<LoginForm />}/>
        <Route path='/navbar' element={<Navbar />}/>
        <Route path='/component' element={<Component />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/user' element={<User />}/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
