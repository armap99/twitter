class User {
    constructor(id, username, name, bio, dateCreated, dateUpdated) {
        this.id = id;
        this.username = username;
        this.name = name;
        this.bio = bio;
        this.dateCreated = dateCreated;
        this.dateUpdated = dateUpdated;
    }
}

module.exports = User;