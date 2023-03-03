const express = require("express");
const { NoteModel } = require("../models/Note.model");
const noteRouter = express.Router();

noteRouter.post("/add", async (req, res) => {
  const { title, note, time } = req.body;
  try {
    const addNote = new NoteModel({ title, note, time });
    await addNote.save();
    res.send({ res: "Added Note" });
  } catch (err) {
    res.send(err);
  }
});

module.exports = { noteRouter };
