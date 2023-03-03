import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Input from "../Compornents/Input";
import NoteBox from "../Compornents/NoteBox";

const Note = () => {
  const [notes, setNotes] = useState([]);

  const handleDelete = (id) => {
    const notesAfterDelete = notes.filter((item) => item._id !== id);
    axios
      .delete(`${process.env.REACT_APP_API}/note/delete/${id}`)
      .then((res) => setNotes(notesAfterDelete));
  };

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API}/note/allnotes`)
      .then((res) => setNotes(res.data.res));
  }, []);

  return (
    <div>
      <Input setNotes={setNotes} notes={notes} />
      <NoteContainer>
        {notes.map((item) => {
          return (
            <NoteBox
              key={item._id}
              // title={item.title}
              // note={item.note}
              // time={item.time}
              {...item}
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
