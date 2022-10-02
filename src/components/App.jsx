import React from "react";
import Header  from "./Header";
import Footer from "./Footer";
import Note from "./Note.jsx";
import CreateArea from "./CreateArea";


function App(){

    

    return <div><Header/>
                <CreateArea/>
            {/* {notes.map( note => <Note key={note.key} title={note.title} content={note.content} /> )}     */}
            <Footer/>
            </div>
};

export default App;