import React from 'react';

export default function AddEmployee() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 offset-md-3 border rounded p-3 mt-2 shadow'>
          <h2 className='text-center m-4'>Add Employee</h2>
          <div className='mb-3'>
            <label htmlFor='FirstName' className='form-label'>First Name</label>
            <input
              type={"text"}
              className="form-control"
              placeholder='Enter first name'
              name='firstName'
              id='FirstName'
            >
            </input>
          </div>
          <div className='mb-3'>
            <label htmlFor='LastName' className='form-label'>Last Name</label>
            <input
              type={"text"}
              className="form-control"
              placeholder='Enter last name'
              name='lastName'
              id='LastName'
            >
            </input>
          </div>
          <div className='mb-3'>
            <label htmlFor='Email' className='form-label'>E-mail</label>
            <input
              type={"text"}
              className="form-control"
              placeholder='Enter e-mail address'
              name='email'
              id='Email'
            >
            </input>
          </div>
          <button type='submit' className='btn btn-outline-primary'>Submit</button>
          <button type='submit' className='btn btn-outline-danger mx-2'>Cancel</button>
        </div>
      </div>
    </div>
  );
};
