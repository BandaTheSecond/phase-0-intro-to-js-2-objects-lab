const employee = { name: "Banda", streetAddress: "4701 main st" };

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return { ...employee, [key]: value };
  }

  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee; 
  }
  
  function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee }; //shallow copy created using spread operator
    delete newEmployee[key];//delete key specified from the copy created
    return newEmployee; //return mew object
  }

  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]; // Deletes the key from the original object
    return employee;
}