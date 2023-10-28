import React, {useState} from 'react';

function Note() {
    const [notes, setNotes] = useState([]); /** hock useState llamada notas junto con su set que permite actualizarlo */
    const [newNote, setNewNote] = useState(""); /** hock useState llamada nueva nota junto con su set que permite actualizarlo */

    const addNote = () => {
        if(newNote. trim() === "") return;
        setNotes([...notes, newNote]);
        setNewNote("");
    };

    const deleteNote = (index) => {  /** variable tipo objeto constante que elimina las notas */
        const newNotes = [...notes];
        newNotes.splice(index,1);
        setNotes(newNotes);
    };

    return (
        <div>
            <h2>Mis notas</h2> 
            
            <input
            type = "text"
            value = {newNote}
            onChange= {(e) => setNewNote(e.target.value)}
            />

            <button onClick = {addNote} > agregar nueva nota</button>
             
            
            <ol> 
                
                {notes.map((note,index) => (
                    <li key = {index}>
                    {note} <button onClick= {() => deleteNote(index)}>Borrar</button>
                   </li>
                ))}
            </ol>
            
            
        </div>
    );
    
}

export default Note;