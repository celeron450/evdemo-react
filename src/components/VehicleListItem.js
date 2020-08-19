import React from 'react';
import { Card, Image } from 'semantic-ui-react';

function VehicleListItem(props) {
  const modelYearName = `${props.year} ${props.model.make.name} ${props.model.name}`;
  return (
    <Card>
      <Card.Content>
        <Image
          src={props.thumbnail_url}
          centered
        />
        <Card.Header textAlign="center">{modelYearName}</Card.Header>
      </Card.Content>
    </Card>
  );
}

export default VehicleListItem;
