import mongoose from "mongoose";
const moduleSchema = new mongoose.Schema(
  {
    course: { type: mongoose.Schema.Types.ObjectId, ref: "CourseModel" },
    name: String,
    description: String,
  },
  { collection: "modules" }
);
export default moduleSchema;
