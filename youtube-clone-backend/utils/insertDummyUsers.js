import User from "../Model/users.model.js";
import bcrypt from "bcrypt";

// Dummy users array
const users = [
  { username: "Alice Smith", email: "alice1@example.com", password: await bcrypt.hash("hashedpass1", 10) },
  { username: "Bob Johnson", email: "bob2@example.com", password: await bcrypt.hash("hashedpass2", 10) },
  { username: "Charlie Brown", email: "charlie3@example.com", password: await bcrypt.hash("hashedpass3", 10) },
  { username: "Diana Prince", email: "diana4@example.com", password: await bcrypt.hash("hashedpass4", 10) },
  { username: "Evan Davis", email: "evan5@example.com", password: await bcrypt.hash("hashedpass5", 10) }
];

const insertDummyUsers = async () => {
  // Insert many users
  const inserted = await User.insertMany(users);

  // Getting userids of all those users inserted
  const userIds = inserted.map(user => user._id);

  console.log(`Inserted ${inserted.length} dummy users successfully.`);

  // Return the array of user IDs for further use
  return userIds;
}

export default insertDummyUsers;