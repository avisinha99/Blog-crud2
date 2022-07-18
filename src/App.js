import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import Login from './pages/Login';
import { useState } from 'react';
import {signOut} from 'firebase/auth';
import {auth,provider} from "./firebase-config";

function App() {
  const [isAuth,setIsAuth]=useState(localStorage.getItem("isAuth"));
  const signUserOut=()=>{
    signOut(auth).then(()=>{
      localStorage.clear()
      setIsAuth(false)
      window.location.pathname="/login";
    })
  };
  return (
    <Router>
    <nav>
      <Link to="/" id='logo'>Blog</Link>
      <Link to="/">Home</Link>
      
      {!isAuth?<Link to="/Login">Login</Link>:(<><Link to="/createpost">Post</Link><button onClick={signUserOut}>Log Out</button></>)}
    </nav>
      <Routes>
        <Route path="/" element={<Home isAuth={isAuth}/>}/>
        <Route path="/createpost" element={<CreatePost isAuth={isAuth}/>}/>
        <Route path="/Login" element={<Login setIsAuth={setIsAuth}/>}/>

      </Routes>
    </Router>
    
  );
}

export default App;
