import React from 'react'
import React, { useState, useEffect } from 'react';

export default function Dashboard() {
    const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const storedEmployees = JSON.parse(localStorage.getItem('employees')) || [];
    setEmployees(storedEmployees);
  }, []);

  useEffect(() => {
    localStorage.setItem('employees', JSON.stringify(employees));
  }, [employees]);

  const addEmployee = (employee) => {
    setEmployees([...employees, employee]);
  };

  const editEmployee = (updatedEmployee) => {
    setEmployees(employees.map(emp => emp.id === updatedEmployee.id ? updatedEmployee : emp));
  };

  const deleteEmployee = (id) => {
    setEmployees(employees.filter(emp => emp.id !== id));
  };
  return (
   
      <div>
      <Dashboard employees={employees} addEmployee={addEmployee} editEmployee={editEmployee} deleteEmployee={deleteEmployee} />
    </div>
  );
}
