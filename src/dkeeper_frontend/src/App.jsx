//import { dkeeper_backend } from 'declarations/dkeeper_backend';

import Footer from "./components/Footer";
import Header from "./components/Header";
import Note from "./components/Note";
import CreateArea from "./components/CreateArea";
import { useState } from "react";
import { dkeeper_backend } from "../../declarations/dkeeper_backend";

function App() {

  const [noteList,setNoteList] = useState([])
  
  function handleMap(note,index) {
    return (
      <Note 
        key={index} 
        id={note.id} 
        title={note.title} 
        content={note.content} 
        deleteItem={(id)=>setNoteList(noteList.filter(note=>note.id!==id))}
      />
    )
  }

  function addNote(newNote) {
    dkeeper_backend.createNote(newNote.title, newNote.content);
    setNoteList([...noteList,newNote])
  }

  return(
    <>
      <Header />
      <CreateArea onAddNote={addNote}/>
      {noteList.map(handleMap)}
      <Footer />
    </>
  )
}

export default App;
