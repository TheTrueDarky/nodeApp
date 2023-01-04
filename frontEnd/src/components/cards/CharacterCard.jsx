import { Button, Card, Modal } from 'react-bootstrap';
import { useRef, useEffect, useState } from 'react';
import './CharacterCard.css';
import { deleteChar } from '../../actions/actions';

function CharacterCard(props) {
  
    const btnRef = useRef(null);

    const [success, setSuccess] = useState(false);
    const [cId, setCID] = useState(0);
    const [showConfirmModal, setShowConfirmModal] = useState(false);

    function transformImageToURL(image) {
      
        let route = String.fromCharCode(...image.data);
       
        let url = 'http://localhost:8900' + route;
      
        return url;
    }

    const delChar = async (id) => {
        console.log(id);
        const char = await deleteChar(id);

        if (char) {
            setSuccess(true);
        }
    }

    useEffect(() => {
      
        if (cId !== 0) {
            delChar(cId);

           
            window.location.reload();
        }
    }, [cId])

    console.log(props);

    return (
        <>
            <Card style={{ overflow: "hidden", maxHeight: "1200px", border: "1px solid black", borderStyle: "double", background: "radial-gradient(circle, #ffffff, #dddddd)", fontFamily: "Arial, sans-serif" }} key={props.id} >
                <Card.Body>
                    <Card.Title>{props.first_name}</Card.Title>
                    <Card.Text>Surname: {props.surname}</Card.Text>
                    <Card.Text>Gender: {props.gender}</Card.Text>
                    <Card.Text>Age: {props.age}</Card.Text>
                    <Card.Text>Deaths: {props.deaths}</Card.Text>
                    <Card.Text>Character type: {props.character_type}</Card.Text>
                    <Card.Text>link id: {props.link_id}</Card.Text>
                    
                    {/* <Card.Text>Demon ID: {props.demon_id}</Card.Text>
                    <Card.Text>Demon Type: {props.demon_type}</Card.Text>
                    <Card.Text>Demon Ability: {props.ability}</Card.Text>

                    <Card.Text>Giant ID: {props.giant_id}</Card.Text>
                    <Card.Text>Giant Role: {props.role}</Card.Text>
                    
                    <Card.Text>God ID: {props.god_id}</Card.Text>
                    <Card.Text>God Responsibility: {props.responsibility}</Card.Text>

                    <Card.Text>Monster ID: {props.monster_id}</Card.Text>
                    <Card.Text>Monster Responsibility: {props.monster_type}</Card.Text>
                    <Card.Text>Monster Responsibility: {props.abilities}</Card.Text>

                    <Card.Text>Mortal ID: {props.mortal_id}</Card.Text>
                    <Card.Text>Mortal Job: {props.job}</Card.Text>

                    <Card.Text>Primordial ID: {props.primodial_id}</Card.Text>
                    <Card.Text>Primordial Department: {props.Department}</Card.Text> */}

                    <Card.Text>Author notes: {props.auth_notes}</Card.Text>
                    <Card.Text>Comments: {props.comments}</Card.Text>
                    <Button href={"update/" + props.id} >Edit</Button>
                    <Button className={"btn-danger"} onClick={() => setShowConfirmModal(true)}>Delete</Button>
                </Card.Body>
            </Card>
            <Modal show={showConfirmModal} onHide={() => setShowConfirmModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm delete</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to delete this character?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowConfirmModal(false)}>
                        Cancel
                    </Button>
                    <Button variant="danger" onClick={() => { setShowConfirmModal(false); setCID(props.id) }}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default CharacterCard;

