import React, {useEffect, useState } from "react";
import Note from "./Note";
import Header from "./Header";
import Footer from "./Footer";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from 'react-router-dom';



function Main() {
  const navigate = useNavigate(); // Hook for navigation
  const [notes, setNotes] = useState([]); // Initialize a state with initialNotes as a variable
  const [newNote, setNewNote] = useState({
    title: "",
    body: "",
  });


  useEffect(() => {
    const fetchNotes = async () => {
      const response = await fetch('http://localhost:5010/api/')
      const json = await response.json()

      if (response.ok){
        setNotes(json)
      }
    }
    fetchNotes()
  })

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user)
        navigate('/main'); // Redirect to the main page if signed in
      } else {
        navigate('/signin'); // Redirect to sign-in page if not signed in
      }
    });
    return () => unsubscribe(); // Cleanup subscription on unmount
  }, [navigate]);

  function handleChange(event) {
    const { name, value } = event.target;
    setNewNote((prevNote) => ({ ...prevNote, [name]: value }));
  }

  async function deleteNote(id) {
    const response = await fetch('http://localhost:5010/api/'+id, {
      method: 'DELETE'
    })
    //setNotes(notes.filter((note) => note.key !== id));
    console.log(id)
    const json = await response.json()
    console.log(json)


    if (!response.ok){
      console.log("Error in delete")
      setError(json.error)
      console.log(error)
    }

    if (response.ok){
      setError(null)
      console.log('Deleted Note', json)
    }
  }

  function createNote(note) {
    return (
      <Note
        id={note._id}
        title={note.title}
        body={note.body}
        onDelete={deleteNote}
      />
    );
  }

  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault() // Don't refresh page

    const note = {...newNote}

    const response = await fetch('http://localhost:5010/api/', {
      method: 'POST',
      body: JSON.stringify(note),
      headers:{
        'Content-Type': 'application/json'
      }
    })

    const json = await response.json()
    console.log(json)
    console.log(note)

    if (!response.ok){
      console.log("Error in get")
      setError(json.error)
    }

    if (response.ok){
      setNewNote({ title: "", body: "" }); // To remove text from input
      setError(null)
      console.log('new note added', json)
    }
  }

  return (
    <div >
      <Header />
      <div className="main-content"> 
      <div>
        <form onSubmit={handleSubmit}>
          <input
            name="title"
            placeholder="Title"
            value={newNote.title}
            onChange={handleChange}
          />
          <textarea
            name="body"
            placeholder="Take a note..."
            value={newNote.body}
            onChange={handleChange}
          />
          <button>Add</button>
        </form>
      </div>
      <div >{notes.map(createNote)}</div>
      </div>
      <Footer />
    </div>
  );
}

export default Main;
