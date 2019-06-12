
class User {
    constructor(userObj) {
        this.name = userObj.name.first;
        this.email = userObj.email;
        this.image = userObj.picture.thumbnail;
        this.dob = userObj.dob.date;
    }
}

export { User }