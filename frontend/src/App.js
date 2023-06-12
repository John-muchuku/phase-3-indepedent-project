import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Display from './Display/Display';
import Home from "./pages/Home"
import Login from './pages/Login';
import Buy from './pages/Buy';
import Rent from './pages/Rent';
import Buysingle from './pages/Buysingle';
import Add from './pages/Add';
import { AuthProvider } from './context/AuthContext';
import Profile from './pages/Profile';
import Register from './pages/Register';
import { PostProvider } from './context/PostContext';

function App() {
  return (

    <BrowserRouter>
    <AuthProvider>
      <PostProvider>
    <Routes>
      <Route path = "/" element = {<Display/>}>
        <Route index element = {<Home/>}/>
        <Route path="login" element = {<Login/>}/>
        <Route path="Register" element = {<Register/>}/>
        <Route path="Add" element = {<Add/>}/>
        <Route path="Profile" element = {<Profile/>}/>
        <Route  path="Buy" element = {<Buy/>}/>
        <Route path="Buy/:id" element={<Buysingle />} />
        <Route path="Rent" element = {<Rent/>}/>

      </Route>
    </Routes>
    </PostProvider>
    </AuthProvider>
    </BrowserRouter>

  );
}

export default App;

