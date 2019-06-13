import React from 'react';
import { UserItem } from './UserItem.js';


export const UserList = (props) => {
    return (
        <React.Fragment>
            {props.listOfUsers.map((user, index) => {
                return <UserItem key={index} name={user.name} lastName={user.lastName} email={user.hideEmail()} image={user.image} dob={user.getFormatDate()} />
            })}
        </React.Fragment>
    )
}