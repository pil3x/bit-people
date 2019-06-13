import React from 'react';
import { UserList } from '../users/UserList.js';
import { UserCardList } from '../users/UserCardList.js';



const Main = (props) => props.isGrid ? <UserCardList listOfUsers={props.users} /> : <UserList listOfUsers={props.users} />
export { Main }