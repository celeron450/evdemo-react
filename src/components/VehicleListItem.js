import React from 'react';

function VehicleListItem(props) {
  return (
    <li>{props.year} {props.model.make.name} {props.model.name}</li>
  );
}

export default VehicleListItem;
