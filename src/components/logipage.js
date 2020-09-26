import React from "react";
import Signup from "./siguppage";
import { NavLink, BrowserRouter as Router,withRouter} from 'react-router-dom';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
       user:'',
       password:'',
       auth:false
    };
  }

  //handle authentication
  componentDidMount(){
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
  
  //handle login form data
  handleformsubmit=(e)=>{
    const {user,password}=this.state;
   let email=e.target.username.value;
   let psw=e.target.psw.value;
   
   let user1=localStorage.getItem("name");
   let password1=localStorage.getItem("psw");
    if(email==user1 && psw==password1){
        alert("login successfully");
    }    
    this.props.history.push('/');
  }

  render() {
      const {auth}=this.state;
    return (
      <Router>
        {auth ? 
        alert("already login")
        :
     
      <div>
        <h1>Signup</h1>
        <Signup></Signup>
      <div>
        <h1>Login</h1>
          <form onSubmit={this.handleformsubmit} id="addform">
              <input className="name" name="username" id="inputtask" type="email" placeholder="enter Email" required></input>
              <input className="psw" name="psw" id="inputtask" type="password" placeholder="enter password" required></input>
              <button id="subbtn" type="submit">Login</button>
          </form>
      </div>
      </div>
  }
      </Router>
    );
  }
}

export default withRouter(Login);
