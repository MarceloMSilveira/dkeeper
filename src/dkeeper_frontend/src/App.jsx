//import { dkeeper_backend } from 'declarations/dkeeper_backend';

import Footer from "./components/Footer";
import Header from "./components/Header";
import Note from "./components/Note";
import CreateArea from "./components/CreateArea";
import { useState } from "react";

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

  return(
    <>
      <Header />
      <CreateArea onAddNote={(newNote)=>setNoteList([...noteList,newNote])}/>
      {noteList.map(handleMap)}
      <Footer />
    </>
  )
}

export default App;
