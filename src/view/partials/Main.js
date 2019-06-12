import React from 'react';
import { UserList } from '../users/UserList.js';



const Main = (props) => {
    return (
        <div className="container users-holder">
            <UserList listOfUsers={props.users} />
        </div>
    )
}

export { Main }