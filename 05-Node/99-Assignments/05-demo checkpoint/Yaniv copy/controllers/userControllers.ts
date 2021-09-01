export {};

const { secret } = require('../../secret/dist/secret');
const jwt = require('jsonwebtoken');
const { Users, User } = require('../../models/dist/usersModel');

export function welcome(req, res) {
  try {
    const { userIndex } = req;
    const users = new Users();
    const { username } = users.users[userIndex];

    res.send({ h1Text:`Awesome App`, message: `${username}, you're already logged in` });

  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
}

export function register(req, res) {
  try {
    const { email, username, password, imageUrl, favColor } = req.body;
    const users = new Users();
    const userBasicInfo = users.addUser(email, username, password, imageUrl, favColor);
    const { userUuid } = userBasicInfo;

    const currentUserToken: any = jwt.sign({ userUuid }, secret, { expiresIn: 1800 });

    res.cookie('currentUser', currentUserToken, { maxAge: 1800000, httpOnly: true });
    res.send({ title: `Cheers, ${username}!`, text: `You are our newest user!` });

  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
}

export function login(req, res) {
  try {
    const { userIndex } = req;

    const users = new Users();
    const { username, userUuid } = users.users[userIndex];
    const currentUserToken: any = jwt.sign({ userUuid }, secret, { expiresIn: 1800 });

    res.cookie('currentUser', currentUserToken, { maxAge: 1800000, httpOnly: true });
    res.send({ title: `Welcome back, ${username}!`, text: `Enjoy your visit!`});

  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
}

export function logout(req, res) {
  try {
    const { userIndex } = req;

    const users = new Users();
    const { username } = users.users[userIndex];

    res.clearCookie('currentUser');
    res.send({ username });

  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
}

export const details = (req, res)=> {
  try {
    const userIndex: string = req.userIndex;
    
    const users = new Users();
    const user = users.users[userIndex];
    
    res.send({ user });


  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
}

export const allUsers = (req, res)=> {
  try {
    
    const users = new Users();
    
    res.send({ users });


  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
}