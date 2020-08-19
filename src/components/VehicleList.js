import React from 'react';
import { Card } from 'semantic-ui-react';
import VehicleListItem from './VehicleListItem';
import useFetchApi from '../hooks/useFetchApi';


function VehicleList(props) {
  const [{ data, isLoading, error }, doFetch] = useFetchApi(`${process.env.REACT_APP_API_SERVER_URL}vehicles/model_years/`, []);

  if (error) {
    return <div>An error occurred while loading the vehicle list</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Card.Group>
      {data.map(vehicle => <VehicleListItem key={vehicle.id} {...vehicle} />)}
    </Card.Group>
  );
}

export default VehicleList;
