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
                <Card.Title>{props.character}</Card.Title>
                <Card.Text>Surname: {props.surname}</Card.Text>
                <Card.Text>Gender: {props.gender}</Card.Text>
                <Card.Text>Age: {props.age}</Card.Text>
                <Card.Text>Deaths: {props.deaths}</Card.Text>
                <Card.Text>Character type: {props.character_type}</Card.Text>
                <Card.Text>link id: {props.link_id}</Card.Text>

                <Card.Text>Demon Type: {props.demon_type}</Card.Text>
                <Card.Text>Ability: {props.ability}</Card.Text>

                <Card.Text>Author notes: {props.auth_notes}</Card.Text>
                <Card.Text>Comments: {props.comments}</Card.Text>
            </Card.Body>
        </Card>
    );
}

export default DemonCard;