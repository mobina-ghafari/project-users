import {BrowserRouter as Router , Routes , Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home";
import Users from "./components/Users";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import './components/main.scss';
import User from "./components/user";

function App (){
  return(
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/users/:id" element={<User/>} />
          <Route path="/users" element={<Users/>} />
          <Route path="/" element={<Home/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;