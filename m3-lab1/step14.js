// 14) Employees array (literal). Anonymous function showEmployee accepts a parameter.
// Display exactly:
//
// Employees:
//
// ZAK
// JESSICA
// MARK
// FRED
// SALLY
const employees = ["Zak", "Jessica", "Mark", "Fred", "Sally"];

const showEmployee = function (empArray) {
  console.log("Employees:");
  for (const emp of empArray) {
    console.log(emp.toUpperCase());
  }
};

showEmployee(employees);
