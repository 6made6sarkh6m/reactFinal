import React,{useState} from 'react';
const AddContact = (props) =>{
    const newContact = {id:'null', name:'', age:'', city:''};
    const [contact, setContact] = useState(newContact);
    const contactValues = (event) =>{
        const{name,value} = event.target;
        setContact({...contact,[name]:value});
    }
    const contactSubmit = (event)=>{
        event.preventDefault();
        if(contact.name && contact.age && contact.city){
            contactValues(event, props.addContact(contact));
        }
    }
    return(
        <form>
            <label>name</label>
            <input className='u-full-width' type="text" name ="name" value={contact.name} onChange={contactValues}/>
            <label>age</label>
            <input className='u-full-width' type="text" name="age" value={contact.age} onChange={contactValues}/>
            <label>city</label>
            <input className='u-full-width' type="text" name="city" value={contact.city} onChange={contactValues}></input>
            <button className='button-primary' type='submit' onClick={contactSubmit}>Add contact</button>
        </form>
    )
}
export default AddContact;