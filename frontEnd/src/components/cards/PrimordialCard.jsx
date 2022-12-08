import { Card } from 'react-bootstrap';
import './PrimordialCard.css';

function PrimordialCard(props) {
    function transformImageToURL(image) {
        let route = String.fromCharCode(...image.data);
        let url = 'http://localhost:8900' + route;
        return url;
    }
    return (
        <Card key={props.id}>
            <Card.Body>
                <Card.Title>{props.department}</Card.Title>
                <Card.Text>: {props.department}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default PrimordialCard;