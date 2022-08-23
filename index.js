// greetMessage("John"); // print "Good Morning, John"

// greetUsers(["John", "Peter", "Mark"], greetMessage);

// function greet(name) {
//   console.log("Good Morning" + " " + name);
// }

// // greet("john");
// greet(["John", "Peter", "Mark"]);
console.log("----------------------------------");

function greetMessage(user, callback) {
  let message = "Good Morning, " + user;
  callback(message);
}

function greetUsers(user) {
  console.log(user);
}

greetMessage("John", greetUsers);
greetMessage("Peter", greetUsers);
greetMessage("Mark", greetUsers);
