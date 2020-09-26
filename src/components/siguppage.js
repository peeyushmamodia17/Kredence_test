import React from "react";
import { NavLink, BrowserRouter as Router,withRouter} from 'react-router-dom';

class Signup extends React.Component {
  constructor() {
    super();

    this.state = {
       user:'',
       password:''
    };
  }
  
  //here signup form data is handle
  handleformsubmit=(e)=>{
    const {user,password}=this.state;
   let email=e.target.username.value;
   let psw=e.target.psw.value;
   let rpsw=e.target.rpsw.value;
   this.setState({
       user:email,
       password:psw
   })
    if(psw==rpsw){
        localStorage.setItem("name",email);
        localStorage.setItem("psw",psw);
        
    }else{
        alert("password doesn't match")
    }
    
    this.props.history.push('/');
    
  }

  render() {
 
    return (
      <div>
          <form onSubmit={this.handleformsubmit} id="addform">
              <input className="name" name="username" id="inputtask" type="email" placeholder="enter Email" required></input>
              <input className="psw" name="psw" id="inputtask" type="password" placeholder="enter password" required></input>
              <input className="rpsw" name="rpsw" id="inputtask" type="password" placeholder="enter repeat password" required></input>
              <button id="subbtn" type="submit">Signup</button>
          </form>
      </div>
    );
  }
}

export default withRouter(Signup);
