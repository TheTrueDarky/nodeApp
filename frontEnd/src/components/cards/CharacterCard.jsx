import { Card } from 'react-bootstrap';
import './CharacterCard.css';

function CharacterCard(props) {
    function transformImageToURL(image) {
        let route = String.fromCharCode(...image.data);
        let url = 'http://localhost:8900' + route;
        return url;
    }
    return (
        <Card key={props.id}>
            <Card.Body>
                <Card.Title>{props.first_name}</Card.Title>
                <Card.Text>Surname: £{props.surname}</Card.Text>
                <Card.Text>Gender: {props.gender}</Card.Text>
                <Card.Text>Age: {props.age}</Card.Text>
                <Card.Text>Deaths: {props.deaths}</Card.Text>
                <Card.Text>Character type: {props.character_type}</Card.Text>
                <Card.Text>Author notes: {props.auth_notes}</Card.Text>
                <Card.Text>Comments: {props.comments}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default CharacterCard;