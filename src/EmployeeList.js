import React from 'react';
import { deleteEmployee } from './CrudOperation';

function EmployeeList({ employees, onDelete }) {
  const handleDelete = async (id) => {
    await deleteEmployee(id);
    onDelete(id);
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <ul className="space-y-4">
        {employees.map((employee) => (
          <li
            key={employee.id}
            className="flex justify-between items-center p-4 bg-gray-100 rounded-lg shadow-sm hover:bg-gray-200"
          >
            <div>
              <p className="text-lg font-medium text-gray-700">
                {employee.fields.Name}
              </p>
              <p className="text-sm text-gray-500">{employee.fields.Email}</p>
            </div>
            <button
              onClick={() => handleDelete(employee.id)}
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EmployeeList;
