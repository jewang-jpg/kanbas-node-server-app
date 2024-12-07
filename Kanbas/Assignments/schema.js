import mongoose from "mongoose";

const assignmentSchema = new mongoose.Schema(
    {
        course: { type: mongoose.Schema.Types.ObjectId, ref: "CourseModel" },
        title: String,
        points: Number,
        description: String,
        startDate: String,
        dueDate: String
    },
    { collection: "assignments" }
);

export default assignmentSchema;