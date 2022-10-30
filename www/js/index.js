function addTask(){
       let newTask= document.createElement('li');
      
       newTask.innerHTML = task.value;
       task.value="";
    //let newTask = '<li>'+ task.value+ '</li>';
    taskList.appendChild(newTask);
    $(taskList).listview('refresh');
  
    $(newTask).on("swiperight",terminer);
   
    function terminer(){
        
       taskEnd.appendChild(newTask);    
       
       $(newTask).on("swipeleft",reprendre);

       function reprendre(){
        taskList.appendChild(newTask);
       }
    }
}

function reinisialiser(){
    taskList.innerHTML = "";
    taskEnd.innerHTML = "";
}

