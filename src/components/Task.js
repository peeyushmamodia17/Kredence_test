import React from "react";
import Tasklist from "./Tasklist";
import Addtask from "./Addtask";
import { NavLink, BrowserRouter as Router} from 'react-router-dom';

class Task extends React.Component {
  constructor() {
    super();

    this.state = {
        datalist:[],
        datalist1:[],
        auth : false
    };
  }

  //here we fetch the api
  componentDidMount(){
      let url='https://jsonplaceholder.typicode.com/todos';

      fetch(url)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            datalist: result
            
          });
          this.handlelist();
        },
        (error) => {
          this.setState({
            moviedetail:[],
            error
          });
        }
      )
      this.authfunction();
  }

  //handle authentication
  authfunction=()=>{
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
 
  // componentDidUpdate(){
  //     this.handletask();
  // }

  //here handle the list
  handlelist=()=>{
      const {datalist,datalist1}=this.state;
      this.setState({
        datalist1: datalist,
        datalist:[]

      });
  }
  
  //here handle the add task for adding task in list
handletask=(e)=>{
    console.log("hii");
    const {datalist1}=this.state;
    let task=document.getElementById("inputtask").value;
    let completed=document.getElementById("completed").value;
    const length=datalist1.length;

    console.log(task);
    console.log(completed);
    document.getElementById("inputtask").value = "";

    let arr={
        "userId":'',
        "id":length+1,
        "title":task,
        "completed":completed
    }
    console.log(arr);
    datalist1.push(arr);
    this.setState({
      datalist1
    })
    console.log(datalist1);
    
}

//here handle delete task
handledeletebtn=(e)=>{
  console.log("delete");
    const {datalist1}=this.state;
    let value=e.target.value;
    console.log(value);
    value=value-1;
    let index='';
    console.log(index);
    if (value > -1) {
      datalist1.splice(value, 1);
    }
    this.setState({
      datalist1
    })

}



  render() {

      const {datalist1,auth}=this.state;
        console.log(datalist1);
    return (
        <Router>
        {auth ? 
        <div>
            <div>
                <Addtask handletask={this.handletask}></Addtask>
            </div>
      <div className="tasklist">
          <div className="addbtn">
          
          </div>
          <div>
          {datalist1.map((list) => {
            return (
              <Tasklist task={list} handledelete={this.handledeletebtn}/>
            )
          })}
          </div>
      </div>
      </div>
      : <p>User not acces without signup</p>
  }
      </Router>
    );
  }
}

export default Task;
