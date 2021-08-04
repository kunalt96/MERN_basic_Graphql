import React, { useState, useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { UPDATE_USER } from '../GraphQL/Mutations';
import { useHistory } from 'react-router-dom';

function UpdateUsers({ dt: { getUsersById }, setUpdateSection }) {
  //   console.log(dt);
  const [formData, setFormData] = useState({
    firstName: getUsersById.firstName,
    lastName: getUsersById.lastName,
    password: getUsersById.password,
    email: getUsersById.email,
    id: getUsersById.id,
  });

  const history = useHistory();

  const [updateUserById, { error, data }] = useMutation(UPDATE_USER, {
    onCompleted(data) {
      if (data) {
        console.log(data);
        setUpdateSection(false);
        alert('Successful Updated...');
        setTimeout(() => {
          history.push('/view-users');
        }, 3000);
      }
    },
  });

  const changeData = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  //   if (data) console.log(data);
  const submitData = (e) => {
    e.preventDefault();
    console.log(formData);
    updateUserById({
      variables: {
        ...formData,
      },
    });
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
              {/* <label htmlFor='firstName'>First Name</label> */}
            </div>
            <div className='input-field col s6'>
              <input
                name='lastName'
                id='lastName'
                value={formData.lastName}
                onChange={changeData}
                type='text'
              />
              {/* <label htmlFor='lastName'>Last Name</label> */}
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
              {/* <label htmlFor='password'>Password</label> */}
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
              {/* <label htmlFor='email'>Email</label> */}
            </div>
          </div>
          <button className='waves-effect waves-light btn-small' type='submit'>
            Update
          </button>
        </form>
      </div>
    </>
  );
}

export default UpdateUsers;
