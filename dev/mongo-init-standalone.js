db = db.getSiblingDB('seQWERiTY');
db.createUser({
    user: 'seQWERiTY',
    pwd: 'paSSw0rd',
    roles: [
        {
            role: 'dbOwner',
            db: 'seQWERiTY',
        },
    ],
});