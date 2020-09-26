import React from 'react';


const Addtask = (props) => {
   let {handletask} =props; 
   
  return (
    //here add task form 
    <div id="addform">
            
            <input id="inputtask" type="text" placeholder="Enter task" required></input>
            <label for="completed">Completed</label>
            <select id="completed">
                <option value="true">True</option>
                <option value="false">False</option>
            </select>
            <button onClick={handletask} type="submit" id="subbtn">Add Task</button>
          
    
    </div>
  );
}

export default Addtask;