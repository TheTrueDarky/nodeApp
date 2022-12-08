import { Card } from 'react-bootstrap';
import './MonsterCard.css';

function MonsterCard(props) {
    function transformImageToURL(image) {
        let route = String.fromCharCode(...image.data);
        let url = 'http://localhost:8900' + route;
        return url;
    }
    return (
        <Card key={props.id}>
            <Card.Body>
                <Card.Title>{props.monster_type}</Card.Title>
                <Card.Text>: {props.abilities}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default MonsterCard;