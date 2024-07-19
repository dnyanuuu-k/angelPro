import mongoose from "mongoose";

export async function connect() {
  try {
    const mongoUri = process.env.MONGODB_URI;

    if (!mongoUri) {
      throw new Error("The MONGODB_URI environment variable is not defined");
    }

    await mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    mongoose.connection.on("connected", () => {
      console.log("MongoDB connected");
    });

    mongoose.connection.on("error", (err) => {
      console.log("MongoDB error: " + err);
      process.exit();
    });
  } catch (error) {
    console.log(error);
    process.exit();
  }
}

export default function some(){
  
}