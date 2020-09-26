import React from "react";
import { NavLink, BrowserRouter as Router, withRouter} from 'react-router-dom';
import User from "./user";

class Changepass extends React.Component {
  constructor() {
    super();

    this.state = {
        user:'',
        pass:''
    };
  }

  //for rendering local storage data
  componentDidMount(){
    const {user,pass}=this.state;

    let user1=localStorage.getItem("name");
    let psw=localStorage.getItem("psw");

    this.setState({
        user:user1,
        pass:psw
    })
  }

  //this function change the password
  handleChangepass=(e)=>{
        console.log("hii");
        const {user,pass}=this.state;

        let psw=e.target.pass.value;

        let password=localStorage.setItem("psw",psw);

        this.setState({
            pass:password
        })
        alert("password change successfully");

       window.location.href="/user";
        
  }
  
  render() {
        const {user,pass}=this.state;
    return (
        
      <div>
         <form id="changepass" onSubmit={this.handleChangepass}>
            <p>Username : {user}</p>
            <input id="inputtask" type="password" name="pass" placeholder="Enter Password" required></input>
            <button id="subbtn" type="submit">Submit</button>
         </form>
      </div>
     
    );
  }
}

export default withRouter(Changepass);
