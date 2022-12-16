import { Button, Card } from 'react-bootstrap';
import { useRef, useEffect, useState } from 'react';
import './CharacterCard.css';
import { deleteChar } from '../../actions/actions';

function CharacterCard(props) {
    const btnRef = useRef(null);
    const [success, setSuccess] = useState(false);
    const [cId, setCID] = useState(0);
    function transformImageToURL(image) {
        let route = String.fromCharCode(...image.data);
        let url = 'http://localhost:8900' + route;
        return url;
    }

    const delChar = async(id) => {
        console.log(id);
        const char = await deleteChar(id);

        if(char){
            setSuccess(true);
        }
    }

    useEffect(()=>{
        if(cId !== 0){
            delChar(cId);

            // Reload the page after the delete operation is performed
            window.location.reload();
        }
    }, [cId])

    console.log(props);
    return (
        <Card style={{overflow: "hidden", maxHeight: "600px", border: "1px solid black", borderStyle: "double"}} key={props.id} >
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
                <Button href={"update/" + props.id} >Edit</Button>
                <Button className={"btn-danger"} onClick={() => {setCID(props.id)}}>Delete</Button>
            </Card.Body>
        </Card>
    )

    
}

export default CharacterCard;