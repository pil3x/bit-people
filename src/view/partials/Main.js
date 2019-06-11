import React from 'react';
import UserList from ''

const Main = (props) => {
    return (
        <div className="container users-holder">
            <UserList listOfUsers={props.users} />
        </div>
    )
}