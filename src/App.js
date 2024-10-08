import React, { useState, useEffect } from 'react';
import { fetchEmployees } from './CrudOperation';
import EmployeeForm from './EmployeeForm';
import EmployeeList from './EmployeeList';

function App() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const getEmployees = async () => {
      const fetchedEmployees = await fetchEmployees();
      setEmployees(fetchedEmployees);
    };
    getEmployees();
  }, []);

 
  const handleAddEmployee = (newEmployee) => {
    setEmployees([...employees, newEmployee]);
  };


  const handleDeleteEmployee = (id) => {
    setEmployees(employees.filter(employee => employee.id !== id));
  };

  return (
    <div className="App container mx-auto p-8">
  <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
    Employee Management
  </h1>
  
  <div className="bg-white shadow-lg rounded-lg p-6 mb-10">
    <EmployeeForm onAdd={handleAddEmployee} />
  </div>

  <h2 className="text-4xl font-semibold text-center mb-6 text-gray-700">
    Employee List
  </h2>

  <div className="bg-white shadow-lg rounded-lg p-6">
    <EmployeeList employees={employees} onDelete={handleDeleteEmployee} />
  </div>
</div>

  );
}

export default App;
