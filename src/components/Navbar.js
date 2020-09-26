import React from 'react';
import { NavLink, BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import Home from "./Home";
import Task from "./Task";
import User from "./user";
import Login from "./logipage";


const Navbar = (props) => {
  let {auth}=props;
  return (
    //here navbar is nevigate as per auth
      <Router>
      {auth==false ?
    <div className="nav">
        <h2 className="logo">LOGO</h2>
        <NavLink className="navbtn" to="/login">Login/Signup</NavLink>
    </div>
    :   
    <div className="nav">
        <h2 className="logo">LOGO</h2>
      <NavLink className="navbtn" to="/">Home</NavLink>
        <NavLink className="navbtn" to="/task">Task</NavLink>
        <NavLink className="navbtn" to="/user">user</NavLink>

    </div>
  }
  {/* here handle the route */}
       <Switch>
             <Route path="/" component={Home} exact/>
             <Route path="/task" component={Task}/>
             <Route path="/user" component={User}/>
             <Route path="/login" component={Login}/>
             <Route component={Home}/>
          </Switch> 
    </Router>
  );
}

export default Navbar;