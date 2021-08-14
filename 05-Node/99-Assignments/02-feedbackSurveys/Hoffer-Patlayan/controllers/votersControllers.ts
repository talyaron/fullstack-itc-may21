import { Voter } from "../models/voter";

export {};
const fs = require("fs");
const userJson = () => {
  const fileJson = fs.readFileSync("./db/voters.json");
  return JSON.parse(fileJson);
};

export const addvoter = (req: any, res: any) => {
  const { name, email } = req.body;
  const voters = userJson();
  const voter = new Voter(name, email);
  voters.push(voter);
  fs.writeFileSync("./db/voters.json", JSON.stringify(voters));
  res.send(voters);
};
