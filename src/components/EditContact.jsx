import React,{useState} from 'react';
const EditContact = (props) =>{
    const [contact, setContact] = useState(props.currentContact);

    const contactValues = (event)=>{
        const{name,value}= event.target;
        setContact({...contact,[name]:value});
    }
    const contactSubmit = (event)=>{
        event.preventDefault();
        if(contact.name && contact.age && contact.city){
            props.updateContact(contact);
        }
    }
    return(
        <form>
            <label>name</label>
            <input className="u-full-width" type="text" value={contact.name} name="name" onChange={contactValues} />
            <label>age</label>
            <input className="u-full-width" type="text" value={contact.age} name="username" onChange={contactValues} />
            <label>city</label>
            <input className="u-full-width" type="text" value={contact.city} name="username" onChange={contactValues} />
            <button className="button-primary" type="submit" onClick={contactSubmit} >Edit user</button>
            <button type="submit" onClick={() => props.setEditing(false)} >Cancel</button>
        </form>
    );
}
export default EditContact;