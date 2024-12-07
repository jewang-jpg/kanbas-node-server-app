import model from "./model.js";

export async function findCoursesForUser(userId) {
  const enrollments = (await model.find({ user: userId }).populate('course')).filter(({ course }) => course);
  return enrollments.map(({ course }) => course);
}

export async function findUsersForCourse(courseId) {
  const enrollments = (await model.find({ course: courseId }).populate('user')).filter(({ user }) => user);
  return enrollments.map(({ user }) => user);
}

export function enrollUserInCourse(user, course) {
  return model.create({user, course})
}

export function unenrollUserInCourse(user, course) {
  return model.deleteOne({user, course})
}
