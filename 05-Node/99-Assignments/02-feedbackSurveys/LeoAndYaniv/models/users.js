export {};
const fs = require('fs');

const readJson = () => {
    try {
        const users = fs.readFileSync('../users.json');
        return JSON.parse(users);

    } catch (error) {
        console.error(error);
    }
}

export const users = readJson();