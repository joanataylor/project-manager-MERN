const mongoose = require('mongoose');


const connectDb = () => {
  mongoose.set('strictQuery', true);
  mongoose
    .connect("mongodb://localhost/projectMernDb", {
    //if using ES5 i need to use this syntax
      useNewUrlParser: true,
      useUnifiedTopology: true,
    //if using ES6 I don't need the above
    //if there is a network outtage my writes will be retried
    //instead add:
    //retryWrites: true,
    })
      .then(() => console.log("Established a connection to the database"))
      .catch((err) =>
        console.log("Something went wrong when connecting to the database", err)
      );
};

module.exports = connectDb;