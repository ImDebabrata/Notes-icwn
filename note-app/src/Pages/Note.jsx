import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Input from "../Compornents/Input";
import NoteBox from "../Compornents/NoteBox";
import { ImSpinner5 } from "react-icons/im";
import Toast from "../Compornents/Toast";

const Note = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({
    message: "",
    type: null,
  });

  const handleDelete = (id, loading) => {
    loading(true);
    const notesAfterDelete = notes.filter((item) => item._id !== id);
    axios
      .delete(`${process.env.REACT_APP_API}/note/delete/${id}`)
      .then((res) => {
        setToast({ message: res.data.res, type: false });
        setNotes(notesAfterDelete);
      })
      .catch((err) => {
        setToast({ message: "Something went wrong", type: true });
        console.log(err);
      })
      .finally(() => {
        loading(false);
        setTimeout(() => {
          setToast({ message: "", type: null });
        }, 3000);
      });
  };

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${process.env.REACT_APP_API}/note/allnotes`)
      .then((res) => setNotes(res.data.res))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <Toast message={toast.message} type={toast.type} />
      <Container>
        <Input
          setNotes={setNotes}
          notes={notes}
          toast={toast}
          setToast={setToast}
        />
        {loading ? (
          <ImSpinner5 />
        ) : (
          <NoteContainer>
            {notes.map((item) => {
              return (
                <NoteBox key={item._id} {...item} handleDelete={handleDelete} />
              );
            })}
          </NoteContainer>
        )}
      </Container>
    </>
  );
};

const Container = styled.div`
  & > svg {
    font-size: 3rem;
    margin-top: 7rem;
    animation: rotation 2s infinite linear;
    @keyframes rotation {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(359deg);
      }
    }
  }
`;

const NoteContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 15px;
  gap: 10px;
  margin: 30px 0 0 0;
  @media screen and (max-width: 765px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 575px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export default Note;
