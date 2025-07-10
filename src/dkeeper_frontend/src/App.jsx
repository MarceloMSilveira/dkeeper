//import { dkeeper_backend } from 'declarations/dkeeper_backend';

import Footer from "./components/Footer";
import Header from "./components/Header";
import Note from "./components/Note";
import CreateArea from "./components/CreateArea";
import { useEffect, useState } from "react";
import { dkeeper_backend } from "../../declarations/dkeeper_backend";
import ClearAll from "./components/ClearAll";

function App() {

  const [noteList,setNoteList] = useState([])
  
  function handleMap(note,index) {
    
    function deleteNote(id) {
      console.log(`id to delete: ${id}`);
      console.log(`note to delete: ${note.title}`);
      console.log(`id of note: ${note.id}`);
      setNoteList(noteList.filter(note=>note.id!==id));
    }
    
    return (
      <Note 
        key={index} 
        id={note.id} 
        title={note.title} 
        content={note.content} 
        deleteItem={deleteNote}
      />
    )
  };

  async function addNote(newNote) {
    //dkeeper_backend.createNote(newNote.title, newNote.content);
    setNoteList([newNote,...noteList]);
    await dkeeper_backend.createNote(newNote.id,newNote.title,newNote.content);
  };

  useEffect(()=>{
    fetchData();
  }, []);

  async function fetchData() {
    const notesArray = await dkeeper_backend.readNotes();
    setNoteList(notesArray);
  }

  return(
    <>
      <Header />
      <CreateArea onAddNote={addNote}/>
      {noteList.map(handleMap)}
      <ClearAll />
      <Footer />
    </>
  )
}

export default App;
