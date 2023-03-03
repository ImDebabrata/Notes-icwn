import React, { useState } from "react";
import styled from "styled-components";

const initialField = {
  title: "",
  note: "",
  time: "",
};

const Input = ({ setNotes, notes }) => {
  const [field, setField] = useState(initialField);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setField({ ...field, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //Set Date and time
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");
    const currentDateTime = `${year}.${month}.${day} ${hours}-${minutes}-${seconds}`;
    // The padStart method is used to add leading zeros to the month, day, hours, minutes, and seconds components, ensuring that they are always two digits long.

    // setField((prev) => ({ ...prev, time: currentDateTime }));

    field.time = currentDateTime;
    setNotes([...notes, field]);
    setField(initialField);
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <InputContainer>
          <InputLabel top={field.title.length} htmlFor="title">
            Title
          </InputLabel>
          <Input_
            value={field.title}
            name="title"
            onChange={handleChange}
            type="text"
            id="title"
            required
          />
        </InputContainer>
        <InputContainer>
          <InputLabel top={field.note.length} htmlFor="note">
            Take a note
          </InputLabel>
          <Input_
            value={field.note}
            name="note"
            onChange={handleChange}
            type="text"
            id="note"
            required
          />
        </InputContainer>
        <Button type="submit">Add</Button>
      </form>
    </Container>
  );
};

const Container = styled.div`
  background-color: white;
  width: 290px;
  margin: auto;
  padding: 10px;
  border-radius: 4px;
`;

export const InputContainer = styled.div`
  position: relative;
  width: 270px;
  margin: 5px auto;
  :focus-within {
    color: black;
    outline: 1px solid grey;
    outline-offset: 3px;
    border-radius: 4px;
    & > label {
      top: -8px;
    }
  }
`;

export const Input_ = styled.input`
  padding: 0 12px;
  border: 1px solid #94969f;
  width: 100%;
  height: 40px;
  outline: none;
  border-radius: 4px;
  :focus {
    border: 1px solid blue;
  }
`;

export const InputLabel = styled.label`
  position: absolute;
  font-size: 12px;
  background-color: white;
  top: ${(length) => (length.top > 0 ? "-8px" : "11px")};
  left: 12px;
  user-select: none;
  transition-duration: 0.1s;
`;

const Button = styled.button`
  background-color: red;
  font-weight: bold;
  border: none;
  padding: 10px;
  color: white;
  border-radius: 4px;
  width: 270px;
  cursor: pointer;
`;

export default Input;
