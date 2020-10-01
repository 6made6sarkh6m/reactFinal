import React from 'react';

const ContacTable =(props)=>{
    return(
        <table>
            <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>age</th>
                    <th>city</th>
                    <th>Options</th>
                </tr>
            </thead>
            <tbody>
                {props.contacts.length > 0 ?(
                    props.contacts.map(contact=>{
                        const {id, name, age, city} = contact;
                        return(
                            <tr>
                                <td>
                                    {id}
                                </td>
                                <td>
                                    {name}
                                </td>
                                <td>
                                    {age}
                                </td>
                                <td>
                                    {city}
                                </td>
                                <td>
                                    <button onClick={() =>{props.deleteContact(id)}}>delete</button>
                                    <button>edit</button>
                                </td>
                            </tr>
                        )
                    })
                ):(
                    <tr>
                        <td colSpan={5}>No contacts</td>
                    </tr>
                )}
            </tbody>
        </table>
    )
}
export default ContacTable;