import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AddEmployee() {
  let navigate = useNavigate();

  const [employee, setEmployee] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  // [Object destructuring](https://www.javascripttutorial.net/es6/javascript-object-destructuring/)
  const { firstName, lastName, email } = employee;

  const onInputChange = (e) => {
    // `...employee` [spread operator](https://www.w3schools.com/react/react_es6_spread.asp)
    setEmployee({ ...employee, [e.target.name]: e.target.value }); // keep adding new objects
  };

  const onSubmit = async (e) => {
    e.preventDefault(); // Prevent default url when clicking `Submit`
    await axios.post("http://localhost:8082/api/employee", employee);
    navigate("/"); // ! Navigate to `Home` page, remove this after testing
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-3 mt-2 shadow">
          <h2 className="text-center m-4">Add Employee</h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="FirstName" className="form-label">
                First Name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter first name"
                name="firstName"
                id="FirstName"
                value={firstName}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="LastName" className="form-label">
                Last Name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter last name"
                name="lastName"
                id="LastName"
                value={lastName}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
                E-mail
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter e-mail address"
                name="email"
                id="Email"
                value={email}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to={"/"}>
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
