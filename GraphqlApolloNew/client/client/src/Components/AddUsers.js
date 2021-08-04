import React, { useState } from 'react';
import { CREATE_USER_MUTATION } from '../GraphQL/Mutations';
import { useMutation } from '@apollo/client';

function AddUsers() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    password: '',
    email: '',
  });

  const [createUser, { error, data }] = useMutation(CREATE_USER_MUTATION);

  const changeData = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  if (data) console.log(data);
  const submitData = (e) => {
    e.preventDefault();
    console.log(formData);
    createUser({
      variables: {
        ...formData,
      },
    });
    if (error) console.log(error);
  };

  return (
    <>
      <div className='row'>
        <form onSubmit={submitData} className='col s6 offset-s3'>
          <div className='row'>
            <div className='input-field col s6'>
              <input
                name='firstName'
                id='firstName'
                value={formData.firstName}
                onChange={changeData}
                type='text'
              />
              <label htmlFor='firstName'>First Name</label>
            </div>
            <div className='input-field col s6'>
              <input
                name='lastName'
                id='lastName'
                value={formData.lastName}
                onChange={changeData}
                type='text'
              />
              <label htmlFor='lastName'>Last Name</label>
            </div>
          </div>
          <div className='row'>
            <div className='input-field col s12'>
              <input
                name='password'
                id='password'
                value={formData.password}
                onChange={changeData}
                type='password'
              />
              <label htmlFor='password'>Password</label>
            </div>
          </div>
          <div className='row'>
            <div className='input-field col s12'>
              <input
                name='email'
                id='email'
                onChange={changeData}
                value={formData.email}
                type='email'
              />
              <label htmlFor='email'>Email</label>
            </div>
          </div>
          <button className='waves-effect waves-light btn-small' type='submit'>
            Register
          </button>
        </form>
      </div>
    </>
  );
}

export default AddUsers;
