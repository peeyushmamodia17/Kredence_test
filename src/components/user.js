import React from "react";
import { NavLink, BrowserRouter as Router,Redirect,Route,Switch} from 'react-router-dom';
import Changepass from "./changepsw";

class User extends React.Component {
  constructor() {
    super();

    this.state = {
        user:'',
        pass:'',
        auth:false
    };
  }
  
  //here get the data from local storage
  componentDidMount(){
      const {user,pass}=this.state;

      let user1=localStorage.getItem("name");
      let psw=localStorage.getItem("psw");

      this.setState({
          user:user1,
          pass:psw
      })
      this.authfunction();
  }

  //handle authentication
  authfunction(){
    let user=localStorage.getItem("name");
    console.log(user);
    if(user){
      this.setState({
        auth:true
      })
    }else{
      this.setState({
        auth:false
      })
    }
  }
  //here handle logout task
  handlelogout=()=>{
      
        localStorage.clear();
        
     window.location.href="/login"
  }
  
  render() {
        const {user,pass,auth}=this.state;
    return (
        <Router>
            {auth ?
      <div>
         <div className="userdetail">
            <p>Username : {user}</p>
            <p>Password : {pass}</p>
         </div>

         <div>
            <NavLink className="navbtn1" to="/changepassword">Change Password</NavLink>
            <button onClick={this.handlelogout} className="navbtn1">Logout</button>
         </div>
      </div>
      : <p>user not access without Signup</p>
  }
   
      <Switch>
             <Route path="/changepassword" component={Changepass}/>
          </Switch> 
   
    </Router>
    );
  }
}

export default User;
