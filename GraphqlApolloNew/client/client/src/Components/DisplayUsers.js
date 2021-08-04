import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { LOAD_USERS_BY_ID, LOAD_USERS } from '../GraphQL/Queries';
import { DELETE_USER } from '../GraphQL/Mutations';
import UpdateUsers from './UpdateUsers';

function DisplayUsers() {
  const [showUpdateSection, setUpdateSection] = useState(false);

  let { id } = useParams();
  const { loading, error, data } = useQuery(LOAD_USERS_BY_ID, {
    variables: { id: parseInt(id) },
  });

  const { refetch } = useQuery(LOAD_USERS);

  const [deleteUserById, { error: userError, data: userData }] = useMutation(
    DELETE_USER,
    {
      onCompleted: () => {
        refetch();
        alert('Successful deletion');
        setTimeout(() => {
          history.push('/view-users');
        }, 3000);
      },
    }
  );
  const history = useHistory();

  const deleteUser = () => {
    deleteUserById({ variables: { id: parseInt(id) } });
  };

  // useEffect(() => {
  //   if (userData) {
  //     console.log(userData);
  //     alert('Successful deletion');
  //     setTimeout(() => {
  //       history.push('/view-users');
  //     }, 3000);
  //   }
  // }, [userData]);

  console.log(typeof id);
  console.log(data);
  if (loading) return <h4>Loading data...</h4>;
  return showUpdateSection ? (
    <>
      <UpdateUsers setUpdateSection={setUpdateSection} dt={data}></UpdateUsers>
    </>
  ) : (
    data.getUsersById && (
      <div className='row'>
        <div className='col s12 m6 offset-m3' style={{ marginTop: '50px' }}>
          <div className='card'>
            <div className='card-content'>
              <span className='card-title'>
                <b>
                  {data.getUsersById.firstName} {data.getUsersById.lastName}
                </b>
              </span>
              <p>Registerd Email: {data.getUsersById.email}</p>
              <p>Registerd Password: {data.getUsersById.password}</p>
              <p>User Id : {data.getUsersById.id}</p>
              <br />
              <div className='card-action'>
                <button
                  onClick={() => {
                    setUpdateSection(true);
                  }}
                  className='waves-effect waves-light btn-small left'
                >
                  Edit Data
                </button>
                <button
                  onClick={deleteUser}
                  className='waves-effect waves-light btn-small right'
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default DisplayUsers;
