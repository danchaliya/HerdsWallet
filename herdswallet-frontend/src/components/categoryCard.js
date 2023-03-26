import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CategoryCard(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
          Expenditure: {props.amount}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

  );
}

export default CategoryCard;