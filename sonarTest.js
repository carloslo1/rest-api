const name = "John Doe";
const age = 30;

function getUserName() {
  const displayName = "Jane Doe";
  return displayName;
}

function calculateYearsSince(yearOfBirth) {
  const currentYear = new Date().getFullYear();
  return currentYear - yearOfBirth;
}

function calculateAge(yearOfBirth) {
  return calculateYearsSince(yearOfBirth);
}

function calculateUserAge(user) {
  return calculateYearsSince(user.yearOfBirth);
}

console.log(getUserName());
console.log(calculateAge(1990));
console.log(calculateUserAge({ yearOfBirth: 1990 }));

export default {
  calculateAge,
  calculateUserAge,
  getUserName,
};