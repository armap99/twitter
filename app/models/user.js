class User {
    constructor(id, username, name, bio) {
        this.id = id;
        this.username = username;
        this.name = name;
        this.bio = bio;
        this.dateCreated = new Date();
        this.dateUpdated = new Date();
    }

    get getUsername() {
        return this.username;
    }   

    get getBio() {
        return this.bio;
    }   

    get getDateCreated() {
        return this.dateCreated;
    }   

    get getDateUpdated() {
        return this.dateUpdated;
    }
}

module.exports = User;