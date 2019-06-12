import { User } from "../entites/User";

const fetchUsers = () => {
    return fetch('https://randomuser.me/api/?results=50')
        .then(response => response.json())
        .then(users => users.results.map(user => {
            return new User(user)
        }))
}


export { fetchUsers }