
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

const App = () => {
  const [notes, setNotes] = useState([]);
  const [noteInput, setNoteInput] = useState('');

  const addNote = () => {
    if (noteInput.trim()) {
      setNotes([...notes, noteInput.trim()]);
      setNoteInput('');
    }
  };

  const deleteNote = (index) => {
    setNotes(notes.filter((_, i) => i !== index));
  };

  return (
    <div className="app">
      <h1>React Notes App</h1>
      <div className="input-container">
        <input
          type="text"
          value={noteInput}
          onChange={(e) => setNoteInput(e.target.value)}
          placeholder="Write a note..."
        />
        <button onClick={addNote} className="add-button">Add Note</button>
      </div>
      <ul className="note-list">
        {notes.map((note, index) => (
          <li key={index} className="note-item">
            {note}
            <button onClick={() => deleteNote(index)} className="delete-button">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
          };


export default App
