import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

const LAUNCH_QUERY = gql`
  query LaunchQuery($flight_number: Int!) {
    launch(flight_number: $flight_number) {
      flight_number
      launch_year
      launch_success
      mission_name
      rocket {
        rocket_id
        rocket_name
        rocket_type
      }
      launch_date_local
    }
  }
`;

export class Launch extends Component {
  render() {
    let { flight_number } = this.props.match.params;
    flight_number = parseInt(flight_number);
    return (
      <>
        <Query query={LAUNCH_QUERY} variables={{ flight_number }}>
          {({ loading, error, data }) => {
            if (loading) return <h4>Loading...</h4>;
            if (error) console.log(error);
            console.log(data);
            const {
              mission_name,
              flight_number,
              launch_year,
              launch_success,
              rocket: { rocket_id, rocket_name, rocket_type },
            } = data.launch;
            return (
              <div>
                <h1 className='my-3 display-4'>
                  <span className='text-dark'>Mission</span>: {mission_name}
                </h1>
                <h4 className='mb-3'>Launch Details</h4>
                <ul className='list-group'>
                  <li className='list-group-item'>
                    Flight Number :{flight_number}
                  </li>
                  <li className='list-group-item'>
                    Launch Year :{launch_year}
                  </li>
                  <li className='list-group-item'>
                    Launch Successfull :
                    <span
                      className={classNames({
                        'text-success': launch_success,
                        'text-danger': !launch_success,
                      })}
                    >
                      {launch_success ? 'Yes' : 'No'}
                    </span>
                  </li>
                </ul>
                <h4>Rocket Details</h4>
                <ul className='list-group'>
                  <li className='list-group-item'>Rocket Id:{rocket_id}</li>
                  <li className='list-group-item'>
                    Rocket Name: {rocket_name}
                  </li>
                  <li className='list-group-item'>
                    Rocket Type {rocket_type}{' '}
                  </li>
                </ul>
                <hr />
                <Link to='/' className='btn btn-secondary'>
                  Back
                </Link>
              </div>
            );
          }}
        </Query>
      </>
    );
  }
}

export default Launch;
