import React, { useState } from "react";
import styled from "styled-components";
import Input from "../Compornents/Input";
import NoteBox from "../Compornents/NoteBox";

const Note = () => {
  const [notes, setNotes] = useState([]);
  console.log("notes:", notes);
  const handleDelete = (index) => {
    // console.log(index);
    const notesAfterDelete = notes.filter(
      (_, deleteIndx) => deleteIndx !== index
    );
    // console.log("notesAfterDelete:", notesAfterDelete);
    setNotes(notesAfterDelete);
  };

  return (
    <div>
      <Input setNotes={setNotes} notes={notes} />
      <NoteContainer>
        {notes.map((item, index) => {
          return (
            <NoteBox
              key={index}
              title={item.title}
              note={item.note}
              time={item.time}
              index={index}
              handleDelete={handleDelete}
            />
          );
        })}
      </NoteContainer>
    </div>
  );
};

const NoteContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 15px;
  gap: 10px;
  margin: 30px 0;
  @media screen and (max-width: 765px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 575px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export default Note;
