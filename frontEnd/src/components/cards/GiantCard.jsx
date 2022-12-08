import { Card } from 'react-bootstrap';
import './GiantCard.css';

function GiantCard(props) {
    function transformImageToURL(image) {
        let route = String.fromCharCode(...image.data);
        let url = 'http://localhost:8900' + route;
        return url;
    }
    return (
        <Card key={props.id}>
            <Card.Body>
                <Card.Title>{props.role}</Card.Title>
                <Card.Text>: {props.role}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default GiantCard;