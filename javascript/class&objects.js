class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    viewData() {
        console.log("view data");
    }
}

let student1 = new User("rohan", "email.com");
let student2 = new User("roh", "emasil.com");