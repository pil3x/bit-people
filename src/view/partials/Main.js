import React from 'react';
import { UserList } from '../users/UserList.js';
import { UserCardList } from '../users/UserCardList.js';
import ErrorContent from './Error.js';


const Main = (props) => {
    const { onInputChange, inputValue, users } = props;

    return (


        <div className="container main-holder">
            <div className="row">

                <div className="container-fluid search-holder">
                    <span className="icon-holder"><i className="fas fa-search"></i></span>
                    <input type="search" value={inputValue} onChange={onInputChange} placeholder="Search User" className="search-input" />
                </div>

            </div>
            {users.length === 0 ?
                <ErrorContent /> :
                props.isGrid ? <UserCardList listOfUsers={props.users} /> : <UserList listOfUsers={props.users} />}
        </div>
    )
}
export { Main }