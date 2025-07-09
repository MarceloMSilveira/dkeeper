import { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';
let idCounter = 0;

export default function CreateArea({onAddNote}) {
  const [note,setNote] = useState({
    id:0,
    title:"",
    content:""
  })

  const [isSmall, setIsSmall] = useState(true);

  function handleAddNote(evt) {
    note.id = idCounter;
    onAddNote(note);
    setNote({
      title:"",
      content:""
    });
    idCounter++;
    evt.preventDefault()
  }

  function handleFirstClick() {
    if (isSmall) {
      setIsSmall(false)
    }
  }

  return (
    <div>
      <form className="create-note">
        {!isSmall&&<input 
          onChange={evt=>setNote({...note,title:evt.target.value})} 
          name="title" 
          placeholder="Title" 
          value={note.title}
        />}
        <textarea 
          onChange={evt=>setNote({...note,content:evt.target.value})} 
          name="content" 
          placeholder="Take a note..." 
          rows= {isSmall ? "1" : "3"} 
          value={note.content}
          onClick = {handleFirstClick}
        />
        <Zoom in={!isSmall}>
          <Fab onClick={handleAddNote}>
            <AddIcon />
          </Fab>
        </Zoom>
        
      </form>
    </div>
  );
}
