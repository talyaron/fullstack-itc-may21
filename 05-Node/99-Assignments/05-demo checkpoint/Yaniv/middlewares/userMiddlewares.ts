export {};

const Ajv = require("ajv");
const ajv = new Ajv();
const addFormats = require("ajv-formats");
addFormats(ajv);

const { secret } = require('../../secret/dist/secret');
const { User, Users } = require("../../models/dist/usersModel");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

export function isLoggedInAndAuthenticated(req, res, next) {
    try {
        const { currentUser } = req.cookies;
        
        if (currentUser) {
            jwt.verify(currentUser, secret, (err, decoded) => {
                if (err) {
                    res.status(401).send({message:'You are not authorized to see this page, mister hacker...'});
                    return;
                }
                req.currentUser = decoded;
                next();
            });
        } else res.status(401).send({message:'The session has expired. Please log in again.'});
         
    } catch (error) {
        console.error(error.message);
        res.status(500).send(error.message);    
    }
}

export function validateBody(schema) {
    try {
        return (req, res, next) => {
            try {
                const valid = ajv.validate(schema, req.body);
                if (!valid) {
                    res.status(400).send(ajv.errors[0]["message"]);
                    return;
                }
                next();

            } catch (error) {
                console.error(error.message);
                res.status(500).send(error.message);
            }
        }
    } catch (error) {
        console.error(error.message);
    }
}

export function doesUserExist(req, res, next) {
    try {
        const users = new Users();

        if (req.currentUser) {
            const { currentUser } = req;
            const { userUuid } = currentUser;
            const userIndex: number = users.findUserIndex(userUuid, null);
        
            if (userIndex !== undefined) {
                req.userUuid = userUuid;
                req.userIndex = userIndex;
                next();
            } else res.status(404).send({ message: `User wasn't found, mister hacker...` });
        } else {
            const { email, registerOrLogin } = req.body;
            
            const userIndex: number = users.findUserIndex(null, email);

            if (registerOrLogin === 'login') {
                if (userIndex === -1) res.status(404).send({ message: `User doesn't exist. Please register to the system.` });
                else {
                    req.userIndex = userIndex;
                    next();
                }
            } else {
                if (userIndex !== -1) res.status(409).send({ message: `Email already registered. Please use a different one.` });
                else next();
            }
            return;
        }

    } catch (error) {
        console.error(error.message);
        res.status(500).send(error.message);    
    }
}

export function encryptPassword(req, res, next) {
    try {
        const { password } = req.body;
        const saltRounds = 10;

        bcrypt.hash(password, saltRounds, (err, hash) => {
            try {
                if (err) throw new Error('Issues in the password encryption process!');
                req.body.password = hash;
                next();
      
            } catch (error) {
                console.error(error.message);
                res.status(500).send(error.message);    
            }
        });
    } catch (error) {
        console.error(error.message);
        res.status(500).send(error.message);    
    }
}

export function validatePassword(req, res, next) {
    try {

        
        const { password } = req.body;
        const users = new Users();
        const { userIndex } = req;
        const encryptedPassword: string = users.users[userIndex].password;

        bcrypt.compare(password, encryptedPassword, (err, result) => {
            try {
                if (err) throw res.status(409).send({ message: 'The password you entered is incorrect.' });
                else if (result) {
                    next();
                } else res.status(409).send({ message: 'The password you entered is incorrect.' });

            } catch (error) {
                console.error(error.message);
                res.status(500).send(error.message);    
            }
        });

    } catch (error) {
        console.error(error.message);
        res.status(500).send(error.message);    
    }
}