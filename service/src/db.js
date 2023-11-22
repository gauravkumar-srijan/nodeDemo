const mongoose = require("mongoose");
const connect = () => {
  const url = 'mongodb+srv://gourav:gourav@cluster0.ruxof.mongodb.net/nodeDemo?retryWrites=true&w=majority';
  mongoose.set("strictQuery", true);
  mongoose
    .connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDB connection established."))
    .catch((error) =>
      console.error("MongoDB connection failed:", error.message)
    );
};
module.exports = connect;
