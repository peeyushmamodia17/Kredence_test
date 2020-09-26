import React from "react";
import Info from "./information";

class Home extends React.Component {
  constructor() {
    super();

    this.state = {
        value:1,
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

  //this function handle drop-down content
  handledropdown=(e)=>{
      const value1=e.target.value;
      console.log(value1);

     this.setState({
         value : value1
     })
  }
  

  render() {

      const {value,auth}=this.state;
 
    return (
      <div>
        {auth ? 
      <div>
          <div>
              <select onClick={this.handledropdown} id="dropdown">
                  <option value="1">Reactjs</option>
                  <option value="2">Nodejs</option>
                  <option value="3">MongoDb</option>
              </select>
          </div>
          <Info value={value}></Info>
      </div>
      : <p>User not access without signup</p>
  }
      </div>
    );
  }
}

export default Home;
