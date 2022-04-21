const User = require('./../app/models/user');

describe("Unit test for User class", () => { 
    test('Create an User class', () => {
        const user = new User(1,"carlogilmar", "Carlo", "Bio");

        expect(user.id).toBe(1);
        expect(user.username).toBe("carlogilmar");
        expect(user.name).toBe("Carlo");
        expect(user.bio).toBe("Bio");
        expect(user.dateCreated).not.toBeUndefined();
        expect(user.dateUpdated).not.toBeUndefined();
    })

    test("Add getters", () => {
        const user = new User(1,"carlogilmar", "Carlo", "Bio");

        expect(user.getUsername).toBeDefined();
        expect(user.getBio).toBeDefined();
        expect(user.getDateCreated).toBeDefined();
        expect(user.getDateUpdated).toBeDefined();
    })

    test("Add setters", () => {
        const user = new User(1,"carlogilmar", "Carlo", "Bio");

        user.setUsername = "Gilmar";
        user.setBio = "New Bio";

        expect(user.username).toBe("Gilmar");
        expect(user.bio).toBe("New Bio");
    })
})