import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { LOAD_USERS } from '../GraphQL/Queries';
import { Link } from 'react-router-dom';

function GetUsers() {
  const { error, loading, data } = useQuery(LOAD_USERS, {
    fetchPolicy: 'cache-and-network',
  });
  const [users, setUsers] = useState([]);

  useEffect(() => {
    console.log('I amn cALLED');
    setUsers(data?.getAllUsers);
    console.log(data?.getAllUsers);
  }, [data]);

  if (loading)
    return (
      <div className='container' style={{ marginTop: '200px' }}>
        <div className='center-align'>
          <div className='preloader-wrapper big active'>
            <div className='spinner-layer spinner-red-only'>
              <div className='circle-clipper left'>
                <div className='circle'></div>
              </div>
              <div className='gap-patch'>
                <div className='circle'></div>
              </div>
              <div className='circle-clipper right'>
                <div className='circle'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );

  return (
    <div className='row'>
      {/* <div className='container'> */}
      {users &&
        users.map((value, index) => {
          return (
            <div
              style={{ cursor: 'pointer' }}
              key={index}
              className='col s12 m4'
            >
              <div className='card darken-1'>
                <div className='card-content dark-text'>
                  <span className='card-title'>{value.firstName}</span>
                  <div className='card-action'>
                    <span className='dark-text left'>ID: {value.id}</span>
                    <Link
                      to={`view-users/${value.id}`}
                      className='waves-effect waves-light btn-small right'
                    >
                      More Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      {/* </div> */}
    </div>
  );
}

export default GetUsers;
