import {BrowserRouter as Router , Routes , Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home";
import Users from "./components/Users";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import './components/main.scss';

function App (){
  return(
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/users" element={<Users/>} />
          <Route path="/login" element={<Login/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;