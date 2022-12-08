import { Card } from 'react-bootstrap';
import './MortalCard.css';

function MortalCard(props) {
    function transformImageToURL(image) {
        let route = String.fromCharCode(...image.data);
        let url = 'http://localhost:8900' + route;
        return url;
    }
    return (
        <Card key={props.id}>
            <Card.Body>
                <Card.Title>{props.job}</Card.Title>
                <Card.Text>: {props.job}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default MortalCard;