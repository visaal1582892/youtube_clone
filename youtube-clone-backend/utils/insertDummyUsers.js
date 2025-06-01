import User from "../Model/users.model";
import bcrypt from "bcrypt";

// Dummy users array
const users = [
  { username: "Alice Smith", email: "alice1@example.com", password: await bcrypt.hash("hashedpass1", 10) },
  { username: "Bob Johnson", email: "bob2@example.com", password: await bcrypt.hash("hashedpass2", 10) },
  { username: "Charlie Brown", email: "charlie3@example.com", password: await bcrypt.hash("hashedpass3", 10) },
  { username: "Diana Prince", email: "diana4@example.com", password: await bcrypt.hash("hashedpass4", 10) },
  { username: "Evan Davis", email: "evan5@example.com", password: await bcrypt.hash("hashedpass5", 10) },
  { username: "Fiona Green", email: "fiona6@example.com", password: await bcrypt.hash("hashedpass6", 10) },
  { username: "George Hall", email: "george7@example.com", password: await bcrypt.hash("hashedpass7", 10) },
  { username: "Hannah Lee", email: "hannah8@example.com", password: await bcrypt.hash("hashedpass8", 10) },
  { username: "Ian Miller", email: "ian9@example.com", password: await bcrypt.hash("hashedpass9", 10) },
  { username: "Julia Nelson", email: "julia10@example.com", password: await bcrypt.hash("hashedpass10", 10) }
];

// Insert many users
const inserted = await User.insertMany(users);

// Getting userids of all those users inserted
const userIds = inserted.map(user => user._id);

console.log(`Inserted ${inserted.length} dummy users successfully.`);

// Return the array of user IDs for further use
return userIds; 