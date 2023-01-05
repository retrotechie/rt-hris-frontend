import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [employees, setEmployees] = useState([]); // `userState` hook for storing the employee info

  useEffect(() => { // `useEffect` hook tells the app to do something after the render
    loadEmployees();
  }, []); // [] empty array will make this function run once only when the page loads

  const loadEmployees = async () => { // `async` to execute line by line, return "Promise" object
    // `await` holds the Promise function & starts it again after data comes from server.
    const result = await axios.get("http://localhost:8082/api/employees");
    if (!result) {
      console.log("Data could not be fetched!");
    } else {
      setEmployees(result.data);
    }
  };

  return (
    <div className='container'>
      <div className='py-4'>
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Email</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {
              employees.map((employee, index) => (
                <tr>
                  <th scope="row" key={index}>{index + 1}</th>
                  <td>{employee.firstName}</td>
                  <td>{employee.lastName}</td>
                  <td>{employee.email}</td>
                  <td>
                    <button className='btn btn-primary mx-2'>View</button>
                    <button className='btn btn-outline-primary mx-2'>Edit</button>
                    <button className='btn btn-danger mx-2'>Delete</button>
                  </td>
                </tr>
              ))  // map() creates a new array from calling a function for every new array element
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};
