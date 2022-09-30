import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from './Components/LandingPage';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Playlist from './Components/Playlist';
import Dashboard from './Components/Dashboard';
import Dropdown from './Components/Dropdown';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/playlsit" element={<Playlist/>}></Route>
        <Route path="/dashboard" element={<Dashboard/>}></Route>
        <Route path="/dropdown" element={<Dropdown/>}></Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
