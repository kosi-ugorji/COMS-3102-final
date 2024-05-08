import React from "react";

function Note(props) {
  return (
    <div className="note col">
      <h1 className="note">{props.title}</h1>
      <p className="note">{props.body}</p>
      <button className="note" onClick={() => {props.onDelete(props.id);console.log(props)}}>
        Delete
      </button>
    </div>
  );
}

export default Note;
