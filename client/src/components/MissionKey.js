import React from 'react';

export default function MissionKey() {
  return (
    <div className='my-3'>
      <p>
        <span className='px-3 mr-2 bg-success' /> = Success
      </p>
      <span className='px-3 mr-2 bg-danger' /> = Failure
      <p></p>
    </div>
  );
}
