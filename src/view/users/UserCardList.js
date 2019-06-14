import React from 'react';
import { UserCard } from './UserCard.js';



const UserCardList = (props) => {
    return (
        <div className="container users-holder-card">
            <div className="row">
                {props.listOfUsers.map((user, index) => {
                    return <UserCard key={index} user={user} />
                })}
            </div>
        </div>
    )
}

export { UserCardList }