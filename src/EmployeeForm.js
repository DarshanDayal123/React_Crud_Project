import React, { useState } from 'react';
import { addEmployee } from './CrudOperation';

function EmployeeForm({ onAdd }) {
  const [newEmployee, setNewEmployee] = useState({
    FirstName: '',
    LastName: '',
    Email: '',
    PhoneNumber: '',
    Department: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newEmployee.FirstName || !newEmployee.LastName || !newEmployee.Email) {
      alert('Please fill in all required fields');
      return;
    }

    const concatenatedName = `${newEmployee.FirstName} ${newEmployee.LastName}`;
    const employeeRecord = {
      Name: concatenatedName,
      FirstName: newEmployee.FirstName,
      LastName: newEmployee.LastName,
      Email: newEmployee.Email,
      PhoneNumber: newEmployee.PhoneNumber,
      Department: newEmployee.Department,
    };
    console.log('Adding Employee:', employeeRecord);

    try {
      const createdEmployee = await addEmployee(employeeRecord);
      onAdd(createdEmployee);
      setNewEmployee({
        FirstName: '',
        LastName: '',
        Email: '',
        PhoneNumber: '',
        Department: '',
      });
    } catch (error) {
      console.error('Error while adding employee:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-lg mx-auto mt-10">
      <h2 className="text-2xl font-semibold mb-4 text-center">Add New Employee</h2>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="FirstName">
          First Name
        </label>
        <input
          id="FirstName"
          type="text"
          placeholder="First Name"
          value={newEmployee.FirstName}
          onChange={(e) => setNewEmployee({ ...newEmployee, FirstName: e.target.value })}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="LastName">
          Last Name
        </label>
        <input
          id="LastName"
          type="text"
          placeholder="Last Name"
          value={newEmployee.LastName}
          onChange={(e) => setNewEmployee({ ...newEmployee, LastName: e.target.value })}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Email">
          Email
        </label>
        <input
          id="Email"
          type="email"
          placeholder="Email"
          value={newEmployee.Email}
          onChange={(e) => setNewEmployee({ ...newEmployee, Email: e.target.value })}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="PhoneNumber">
          Phone Number
        </label>
        <input
          id="PhoneNumber"
          type="text"
          placeholder="Phone Number"
          value={newEmployee.PhoneNumber}
          onChange={(e) => setNewEmployee({ ...newEmployee, PhoneNumber: e.target.value })}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Department">
          Department
        </label>
        <input
          id="Department"
          type="text"
          placeholder="Department"
          value={newEmployee.Department}
          onChange={(e) => setNewEmployee({ ...newEmployee, Department: e.target.value })}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="flex items-center justify-center">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Add Employee
        </button>
      </div>
    </form>
  );
}

export default EmployeeForm;
