const express = require("express");

const app = express();
app.use(express.json());
app.listen(3000);

// let users = {};
// Middleware function --> Post

// app.get("/users", (req, res) => {
//   res.send(users);
// });

// // Post request to send data to server
// app.post("/users", (req, res) => {
//   console.log(req.body);
//   users = req.body;
//   res.json({
//     message: "data recieved succesfully",
//     user: req.body,
//   });
// });

// // const fbUsers = {
// //     {
// //         id:1,
// //         name:"Pranay"
// //     },
// //     {
// //         id:1,
// //         name:"Pranay"
// //     },
// //     {
// //         id:1,
// //         name:"Pranay"
// //     },
// // }

// // Patch - to update data

// app.patch("/users", (req, res) => {
//   console.log("req.bodt data", req.body);
//   let dataToBeUpdated = req.body;
//   for (key in dataToBeUpdated) {
//     users.key = dataToBeUpdated.key;
//   }
//   res.json({
//     message: "data updated succesfully",
//   });
// });

// // Delete

// app.delete("/users", (req, res) => {
//   users = {};
//   res.json({
//     message: "Data has been successfully",
//   });
// });

const users = [
  { id: 1, name: "Pranay" },
  { id: 2, name: "Drashti Patel" },
  { id: 3, name: "Anjali Joshi" },
  { id: 4, name: "Kashmira Deshmukh" },
];

app.get("/user", (req, res) => {
  console.log(req.query);
  res.send(users);
});

app.get("/getUser/:username", (req, res) => {
  console.log(req.params.id);
  console.log(req.params);
  res.send("User id recieved succesfully");
});
