import { Card } from 'react-bootstrap';
import './CharacterCard.css';

function CharacterCard(props) {
    function transformImageToURL(image) {
        let route = String.fromCharCode(...image.data);
        let url = 'http://localhost:8900' + route;
        return url;
    }
    console.log(props);
    return (
        <Card key={props.id}>
            <Card.Body>
                <Card.Title>{props.first_name}</Card.Title>
                <Card.Text>Surname: {props.surname}</Card.Text>
                <Card.Text>Gender: {props.gender}</Card.Text>
                <Card.Text>Age: {props.age}</Card.Text>
                <Card.Text>Deaths: {props.deaths}</Card.Text>
                <Card.Text>Character type: {props.character_type}</Card.Text>
                <Card.Text>link id: {props.link_id}</Card.Text>
                <Card.Text>demon id: {props.demon_id}</Card.Text>
                <Card.Text>demon type: {props.demon_type}</Card.Text>
                <Card.Text>Author notes: {props.auth_notes}</Card.Text>
                <Card.Text>Comments: {props.comments}</Card.Text>
                <Card.Link href={"update/" + props.id}>Edit</Card.Link>
                <Card.Link>Delete</Card.Link>
            </Card.Body>
        </Card>
    )
}

export default CharacterCard;