// src/pages/Contacts.tsx
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { addContact, editContact, deleteContact } from '../features/contacts/contactsSlice';
import { nanoid } from 'nanoid';

const Contacts: React.FC = () => {
  const contacts = useSelector((state: RootState) => state.contacts.contacts);
  const dispatch = useDispatch();

  const [formState, setFormState] = useState({ id: '', name: '', email: '', phone: '' });
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (isEditing) {
      dispatch(editContact(formState));
      setIsEditing(false);
    } else {
      dispatch(addContact({ ...formState, id: nanoid() }));
    }
    setFormState({ id: '', name: '', email: '', phone: '' });
  };

  const handleEdit = (contact: any) => {
    setFormState(contact);
    setIsEditing(true);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Contacts</h1>
      <div className="mb-4">
        <input
          type="text"
          name="name"
          value={formState.name}
          onChange={handleChange}
          placeholder="Name"
          className="border p-2 mr-2"
        />
        <input
          type="email"
          name="email"
          value={formState.email}
          onChange={handleChange}
          placeholder="Email"
          className="border p-2 mr-2"
        />
        <input
          type="text"
          name="phone"
          value={formState.phone}
          onChange={handleChange}
          placeholder="Phone"
          className="border p-2 mr-2"
        />
        <button onClick={handleSubmit} className="bg-blue-500 text-white p-2">
          {isEditing ? 'Update' : 'Add'}
        </button>
      </div>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id} className="mb-2">
            <span className="mr-2">{contact.name}</span>
            <span className="mr-2">{contact.email}</span>
            <span className="mr-2">{contact.phone}</span>
            <button onClick={() => handleEdit(contact)} className="bg-yellow-500 text-white p-1 mr-2">
              Edit
            </button>
            <button onClick={() => dispatch(deleteContact(contact.id))} className="bg-red-500 text-white p-1">
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Contacts;
