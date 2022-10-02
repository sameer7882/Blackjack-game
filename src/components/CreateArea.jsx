import React from "react";

function CreateArea() {

  const [note,setNote] = React.useState({

    title : "",
    content : ""
});

  // to add component in the keeper app
  
    function handleChange(event){

        const targ = event.target.name;
        const newValue = event.target.value;
        
        if(targ == "title"){
            setNote( prevValue  =>({title : newValue,content : prevValue.content
            }))
        }

        else{
          setNote( (prevValue)  =>   ({title : prevValue.title, content: newValue}))
        }
    }

    function addNewTask(){

        // function to add new tasks 
    }

  return (
    <div className="create-note">
      <form >
        <input name="title" className="create-note" value={note.title} onChange={handleChange} placeholder="Title" />
        <textarea name="content" className="create-note"  placeholder="Take a note..." onChange={handleChange}  value={note.content} rows="3" />
        <button onClick={addNewTask}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;

