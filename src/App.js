import React, { useState } from 'react';
import contactList from './data.js';
import ContacTable from './components/ContacTable';
import AddContact from './components/AddContact';
import EditContact from './components/EditContact';

const App =()=>{
  const [contacts, setContacts] = useState(contactList);
  const addContact = (contact) => {
    contact.id = contacts.length+1;
    setContacts([...contacts, contact]);
  }
  const deleteContact = (id) =>{
    setContacts(contacts.filter(contact => contact.id!==id));
  }


  const [editing, setEditing] = useState(false);

  const initialContact = {id: null, name: '', age: '', city: ''};

  const [currentContact, setCurrentContact] = useState(initialContact);

  const editContact = (id, contact) => {
    setEditing(true);
    setCurrentContact(contact);
  }
  const updateContact = (newContact) => {
    setContacts(contacts.map(contact => (contact.id === currentContact.id ? newContact : contact)))
  }
 
  return(
    <div className="container">
      <h1>Test task</h1>
      <div className="row">
        <div className="five columns">
          {editing ?(
            <div>
            <h2>Edit contact</h2>
            <EditContact 
              currentContact={currentContact}
              setEditing={setEditing}
              updateContact={updateContact}
            />
          </div>
          ):(
            <div>
              <h2>Add contact</h2>
            <AddContact addContact={addContact}/>
            </div>
          )}
            
        </div>
        <div className="seven columns">
          <h2>Your contact list</h2>
          <ContacTable contacts={contacts} deleteContact={deleteContact}  editContact={editContact}/>
        </div>
      </div>
    </div>
  );
}

export default App;
