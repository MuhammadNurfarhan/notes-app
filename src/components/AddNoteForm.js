/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Form, FormGroup, Label, Input, TextArea } from "./ui/Form";
import Button from './ui/Button';
import Message from './ui/Message';
import getLocalStorageData from '../utils/getLocalStorageData';

function AddNoteForm() {
  const [state, setState] = useState({title: '', note: ''});
  const [isSuccess, setIsSuccess] = useState(false);


  const handleTitleChange = (e) => {
    setState({ ...state, title: e.target.value });
  };

  const handleNoteChange = (e) => {
    setState({ ...state, note: e.target.value });
  };

  const handleSubmit = (e) => {
    const notes = getLocalStorageData('notes');

    // Setiap note harus memiliki id unik untuk membedakan dengan data note yang lain
    // Kita bisa menggunakan package uuid dari npm
    // Untuk menginstallnya gunakan command => yarn add uuid
    const noteId = uuidv4();

    // Tambahkan data note + noteId di dalam state ke array existing
    notes.push({ ...state, id: noteId });

    // Simpan data ke localStorage dengan command localStorage.setItem()
    // Gunakan method JSON.stringify() untuk mengubah object ke String
    // Karena localStorage hanya bisa menyimpan tipe data String
    localStorage.setItem('notes', JSON.stringify(notes));

    setIsSuccess(true);
    
    e.preventDefault();
  };

  const { title, note } = state;

  return (
    <>
      {isSuccess && <Message text="Data berhasil disimpan" />}
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>Title</Label>
          <Input type="text" name="title" value={title} onChange={handleTitleChange} />
        </FormGroup>
        <FormGroup>
          <Label>Note</Label>
          <TextArea name="note" rows="12" value={note} onChange={handleNoteChange} />
        </FormGroup>
        <FormGroup>
          <Button type="submit">Add</Button>
        </FormGroup>
      </Form>
    </>
  );
}

export default AddNoteForm;