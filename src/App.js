import logo from './logo.svg';
import './App.css';
import Component from './component';
import LoginForm from './Login/LoginForm';
import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom';
import Navbar from './Navbar/navbar';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<LoginForm />}/>
        <Route path='/navbar' element={<Navbar />}/>
        <Route path='/component' element={<Component />}/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
