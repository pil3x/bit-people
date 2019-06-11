import React from 'react';
import User from './UserItem.js';


export const UserList = (props) => {
    return (
        <React.Fragment>
            {props.listOfUsers.map((user, index) => {
                return <User key={index} name={user.name.first} email={user.email} image={user.picture.thumbnail} dob={user.dob.date} />
            })}
        </React.Fragment>
    )
}