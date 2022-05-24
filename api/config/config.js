const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://bookingapp:booking@cluster0.6zxz8.mongodb.net/book?retryWrites=true&w=majority");

mongoose.connection.once("open", () => {
  console.log("mongoDB connected!");
});
