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
})