import React from "react";
import styled from "styled-components";
import { MdDelete } from "react-icons/md";

const NoteBox = ({ title, note, time, handleDelete, _id }) => {
  return (
    <Container>
      <Heading>{title}</Heading>
      <Text>{note}</Text>
      <DateTime>{time}</DateTime>
      <MdDelete onClick={() => handleDelete(_id)} />
    </Container>
  );
};

const Container = styled.div`
  /* width: 250px; */
  position: relative;
  padding: 5px 5px 15px 5px;
  background-color: white;
  /* border: 1px solid red; */
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  border-radius: 7px;
  text-align: left;
  & > svg {
    position: absolute;
    right: 5px;
    bottom: 5px;
    font-size: 1.5rem;
    cursor: pointer;
    color: red;
  }
`;

const Heading = styled.h3``;
const Text = styled.p``;

const DateTime = styled.sub``;

export default NoteBox;
