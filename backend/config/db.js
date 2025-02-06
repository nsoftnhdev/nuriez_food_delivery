import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose.connect("mongodb+srv://creative:admin1234567@cluster0.h4tpi.mongodb.net/nuriezfood").then(() => console.log("DB Connected"));
}