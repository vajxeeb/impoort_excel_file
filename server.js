const express = require("express");
const app = express();
const db = require("./models");
const initRoutes = require("./routes/tutorial.route");
global.__basedir = __dirname + "/";

app.use(express.urlencoded({ extended: true }));
initRoutes(app);

db.sequelize.sync();
db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
});


//homepage rout
app.get("/", (req, res) => {
  return res.send('pppppp')
});

let a=10;

app.get('/t' , (req , res)=>{

   res.send(`my directory is: ${global.__basedir}`)

});



let port = 8080;
app.listen(port, () => {
  console.log(`Running at localhost:${port}`);
});
// db.sequelize.sync();
// db.sequelize.sync({ force: true }).then(() => {
//     console.log("Drop and re-sync db.");
//   });