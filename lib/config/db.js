import mongoose from "mongoose";

export const ConnectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://joseneyjeanpierre:annoying@cluster0.b9gymbg.mongodb.net/blog-app');
    console.log("DB Connected");
  } catch (error) {
    console.error("DB connection error:", error.message);
  }
};