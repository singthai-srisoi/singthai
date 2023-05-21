//generate react component that will be rendered a list from usestate into the dom
//create a function that will be called when the user clicks on the button
//this function will call the api to get the list of notes and then set the state of the list
//create a useEffect that will call the function when the component is rendered

// Path: noteapp.js
//generate react component that will be rendered a list from usestate into the dom
//create a function that will be called when the user clicks on the button
//this function will call the api to get the list of notes and then set the state of the list
//create a useEffect that will call the function when the component is rendered

import React, { useState, useEffect } from "react";
import Note from "./note";
import "./noteapp.css";
import axios from "axios";

const NoteApp = () => {
  const [notes, setNotes] = useState([]);

  const getNotes = () => {
    axios
      .get("http://localhost:5000/note")
      .then((res) => {
        setNotes(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getNotes();
  }, []);

  return (
    <div className="noteapp">
      <h1 className="title">Notes</h1>
      <div className="noteapp__notes">
        {notes.map((note) => (
          <div className="noteapp__note">
            <Note
              key={note._id}
              id={note._id}
              title={note.title}
              content={note.content}
              date={note.date}
              getNotes={getNotes}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NoteApp;