const { default: mongoose } = require("mongoose");

const connectToDB = async () => {
  const connectionURL =
    "mongodb+srv://satyajeetdc:9EYE0ejoCUw3iLV0@cluster0.tlh924l.mongodb.net/";

  mongoose
    .connect(connectionURL)
    .then(() => console.log("JobScope DB coneection successfull."))
    .catch((error) => console.log(error));
};

export default connectToDB;
