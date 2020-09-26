import React from 'react';


const Tasklist = (props) => {
    let {task,handledelete}=props;
   
  return (
    //here render the all the task
    <div id="task1">
        <div className="task">
            <p>{task.id}</p>
            <p id="taskname">{task.title}</p>
            <p id="taskname">{task.completed}</p>
            <button onClick={handledelete} id="dlbtn" value={task.id}>Delete</button>
        </div>
    
    </div>
  );
}

export default Tasklist;