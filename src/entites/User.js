
class User {
    constructor(userObj) {
        this.name = userObj.name.first;
        this.lastName = userObj.name.last;
        this.email = userObj.email;
        this.image = userObj.picture.thumbnail;
        this.dob = userObj.dob.date;

    }

    hideEmail = () => {
        const splitedEmail = this.email.slice(-15);
        const hiddenEmail = `${(this.email.slice(0, 3).concat('...'))}${splitedEmail}`;

        return hiddenEmail;
    }

    getFormatDate = () => {
        const dateObj = new Date(this.dob);
        return `${dateObj.getDate()}-${(dateObj.getMonth() + 1)}-${dateObj.getFullYear()}`
    }
}


export { User }