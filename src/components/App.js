import React from "react";
import Navbar from "./Navbar";



class App extends React.Component {
  constructor() {
    super();

    this.state = {
        auth:false
    };
  }

  //for checking authentication
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

  render() {
    const {auth} = this.state;
    return (
      <div className="App">
          <Navbar auth={auth}/>
          
      </div>
      
    );
  }
}

export default App;
