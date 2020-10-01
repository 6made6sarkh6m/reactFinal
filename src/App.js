import React, { useState } from 'react';
import contactList from './data.js';
import ContacTable from './components/ContacTable';
import AddContact from './components/AddContact';
import EditContact from './components/EditContact.jsx';

const App =()=>{
  const [contacts, setContacts] = useState(contactList);
  const addContact = (contact) => {
    contact.id = contacts.length+1;
    setContacts([...contacts, contact]);
  }
  const deleteContact = (id) =>{
    setContacts(contacts.filter(contact => contact.id!==id));
  }

  const [edit, setEditing] = useState(false);
  const newContact = {id:null, name:'', age:'', city:''};
  const [currentcontact, currentContact] = useState(newContact);
  
  const updateContact = (newContact) =>{
    setContacts(contacts.map(contact=>(contact.id === currentContact.id ? newContact : contact)))
  }
  return(
    <div className="container">
      <h1>Test task</h1>
      <div className="row">
        <div className="five columns">
          {edit? (
            <div>
              <h2>Update contact</h2>
                <EditContact
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
          <ContacTable contacts={contacts} deleteContact={deleteContact}/>
        </div>
      </div>
    </div>
  );
}

export default App;
