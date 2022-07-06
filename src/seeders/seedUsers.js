const User = require("../Models/UserSchema.js");
const db = require("../config/dbConnect.js");

const users = [
  new User({
    name: 'Jacquin',
    email: 'jacquin@gmail.com',
    role: 'admin',
    sector: '60660af3786b3c00470115c9',
    image: '1234567ahshdess',
  }),
  new User({
    name: 'Usuario Um',
    email: 'um@gmail.com',
    role: 'admin',
    sector: '60660af3786b3c00470115c9',
  }),
  new User({
    name: 'Usuario Dois',
    email: 'dois@gmail.com',
    role: 'admin',
    sector: '60660af3786b3c00470115c9',
  }),
  new User({
    name: 'Usuario Três',
    email: 'tres@gmail.com',
    role: 'admin',
    sector: '60660af3786b3c00470115c9',
  }),
  new User({
    name: 'Usuario Quatro',
    email: 'quatro@gmail.com',
    role: 'admin',
    sector: '60660af3786b3c00470115c9',
    aoba: 'hehe'
  }),
];

db.on("error", console.log.bind(console, 'Error on connecting to MongoDB'));
db.once("open", () => {
  console.log('MongoDB is connected');
})

const usersLength = users.length;

users.forEach(async (user, index) => {
  await user.save((err, result) => {
    try {
      if (err) throw new Error(`${err?.message}`);
      if (index === usersLength - 1) {
        console.log("DONE!");
        db.close();
      }
    } catch(err) {
      console.log(`Failed to seed users ${err}`);
      db.close();
      process.exit(0);
    }
  });
});
