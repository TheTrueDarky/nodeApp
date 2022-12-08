import { Card } from 'react-bootstrap';
import './DemonCard.css';

function DemonCard(props) {
    function transformImageToURL(image) {
        let route = String.fromCharCode(...image.data);
        let url = 'http://localhost:8900' + route;
        return url;
    }
    return (
        <Card key={props.id}>
            <Card.Body>
                <Card.Title>{props.first_name}</Card.Title>
                <Card.Text>Demon Type: {props.demon_type}</Card.Text>
                <Card.Text>Ability: {props.ability}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default DemonCard;