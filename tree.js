var employee = [
  { id: 1, managerId: null },
  { id: 2, managerId: 1 },
  { id: 3, managerId: 2 },
  { id: 4, managerId: 3 },
  { id: 5, managerId: 4 }
  
]


var root = [];

var map = {};

var managers=employee.filter(emp => {
  
  if (emp.managerId==null) return root.push(emp);
  
  
  let managerIndex = map[emp.managerId];
  if (typeof managerIndex !== "number") {
    managerIndex = employee.findIndex(el => el.id === emp.managerId);
    map[emp.managerId] = managerIndex;
  }
  
  if (!employee[managerIndex].child) {
    return employee[managerIndex].assignees = [emp];
  }
  
  employee[managerIndex].assignees.push(emp);
});

console.log(JSON.stringify(root));