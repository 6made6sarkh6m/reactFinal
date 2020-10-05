import React, {useState} from 'react';
import {useEffect} from 'react';
const EditContact = (props)=>{
    useEffect(() => {
        setUser(props.currentContact)
    }, [props])
    const [contact, setUser] = useState(props.currentContact);

    const handleChange =(event) =>{
        const{name, value} = event.target;
        setUser({...contact,[name]:value});

    }
    const handleSubmit =(event)=>{
        event.preventDefault();
        if(contact.name&& contact.age && contact.city){
            props.updateContact(contact);
        }

    }
    
    return(
        <form>
            <label>name</label>
            <input className="u-full-width" type="text" value={contact.name} name="name" onChange={handleChange} />
            <label>age</label>
            <input className="u-full-width" type="text" value={contact.age} name="age" onChange={handleChange} />
            <label>city</label>
            <input className="u-full-width" type="text" value={contact.city} name="city" onChange={handleChange} />
            <button className="button-primary" type="submit" onClick={handleSubmit} >Edit contact</button>
            <button type="submit" onClick={() => props.setEditing(false)} >Cancel</button>
        </form>
    )
}
export default EditContact;