import React from 'react';
import users from '../../shared/usersList.js'


export const User = (props) => {
    const dateObj = new Date(props.dob);
    return (
        <div className="one-user row">
            <div className="user-image-holder col-1">
                <img src={props.image} />
            </div>
            <div className="user-info-holder col-11">
                <p className="user-name">Name: {props.name.charAt(0).toUpperCase() + props.name.slice(1)}</p>
                <p>Email: {props.email}</p>
                <p>Date of birth: {`${dateObj.getMonth()}-${dateObj.getDate()}-${dateObj.getFullYear()}`}</p>
            </div>
        </div>
    );
}