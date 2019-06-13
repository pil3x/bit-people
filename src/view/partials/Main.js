import React from 'react';
// import { UserList } from '../users/UserList.js';
import { UserCardList } from '../users/UserCardList.js';



const Main = (props) => {
    return (
        // <UserList listOfUsers={props.users} />
        <UserCardList listOfUsers={props.users} />
    )
}

export { Main }