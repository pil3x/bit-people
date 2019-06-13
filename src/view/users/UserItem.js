import React from 'react';

const UserItem = (props) => {

    return (
        <div className="one-user row">
            <div className="user-image-holder col-1">
                <img src={props.image} alt="" />
            </div>
            <div className="user-info-holder col-11">
                <p className="user-name">Name: {props.name.charAt(0).toUpperCase() + props.name.slice(1)} {props.lastName.charAt(0).toUpperCase() + props.lastName.slice(1)}</p>
                <p className="user-email">
                    <i class="fas fa-envelope"></i>
                    Email: {props.email}
                </p>
                <p className="user-birthday">
                    <i class="fas fa-birthday-cake"></i>
                    Date of birth: {props.dob}
                </p>
            </div>
        </div>
    );
}


export { UserItem }