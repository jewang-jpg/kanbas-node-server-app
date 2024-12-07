import model from "./model.js";

export function findAssignmentsForCourse(courseId) {
  return model.find({ course: courseId });
}

export function createAssignment(assignment, course) {
  delete assignment._id;
  return model.create({ ...assignment, course });
}

export function updateAssignment(assignmentId, assignmentUpdates) {
  return model.updateOne({ _id: assignmentId }, { $set: assignmentUpdates });
}

export function deleteAssignment(assignmentId) {
  return model.deleteOne({ _id: assignmentId });
}
