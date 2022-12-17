import { Button, Card } from 'react-bootstrap';
import { useRef, useEffect, useState } from 'react';
import './CharacterCard.css';
import { deleteChar } from '../../actions/actions';

// CharacterCard is a functional component that receives props as an argument
// and displays a card with information about a character.
function CharacterCard(props) {
    // btnRef is a ref object created with the useRef hook
    // it is assigned to null initially
    const btnRef = useRef(null);

    // success and cId are state variables created with the useState hook
    // success is initially set to false, and cId is initially set to 0
    const [success, setSuccess] = useState(false);
    const [cId, setCID] = useState(0);

    // transformImageToURL is a function that takes an image as an argument
    // and returns a URL
    function transformImageToURL(image) {
        // route is created by converting the data property of the image object
        // to a string using the String.fromCharCode function
        let route = String.fromCharCode(...image.data);
        // url is created by concatenating 'http://localhost:8900' and the route string
        let url = 'http://localhost:8900' + route;
        // the url is returned
        return url;
    }

    // delChar is an async function that takes an id as an argument
    // it calls the deleteChar action with the provided id and
    // sets the success state variable to true if the delete operation was successful
    const delChar = async (id) => {
        console.log(id);
        const char = await deleteChar(id);

        if (char) {
            setSuccess(true);
        }
    }

    // useEffect hook is called with a function and an array of dependencies
    // the function is called whenever one of the dependencies changes
    useEffect(() => {
        // if cId is not equal to 0, delChar is called with cId as an argument
        if (cId !== 0) {
            delChar(cId);

            // Reload the page after the delete operation is performed
            window.location.reload();
        }
    }, [cId])

    console.log(props);

    // a Card component is returned
    // it displays the character's first name as the title
    // and displays other character information in Card.Text components
    // there are also two Button components, one for editing and one for deleting the character
    return (
        <Card style={{ overflow: "hidden", maxHeight: "600px", border: "1px solid black", borderStyle: "double" }} key={props.id} >
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
                <Button className={"btn-danger"} onClick={() => { setCID(props.id) }}>Delete</Button>
            </Card.Body>
        </Card>
    )
}

// the CharacterCard component is exported
export default CharacterCard;


