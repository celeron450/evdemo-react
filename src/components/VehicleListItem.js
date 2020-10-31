import React from 'react';
import { Card, Image } from 'semantic-ui-react';

import '../styles/VehicleListItem.css';

function VehicleListItem(props) {
  const modelYearName = `${props.year} ${props.model.make.name} ${props.model.name}`;
  return (
    <Card className="vehicle-card">
      <Card.Content>
        <div className="vehicle-card-image-container">
          <Image
            src={props.thumbnail_url}
            centered
          />
        </div>
        <Card.Header textAlign="center">{modelYearName}</Card.Header>
      </Card.Content>
    </Card>
  );
}

export default VehicleListItem;
