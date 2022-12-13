import { useState } from 'react';
import { Form, Container, Button, Alert } from 'react-bootstrap';
import {addCharacter} from '../actions/actions';
import './AddCharacters.css';


function AddCharacters() {
    const [first_name, setFirst_Name] = useState('');
    const [surname, setSurname] = useState('');
    const [gender, setGender] = useState('');
    const [age, setAge] = useState(0);
    const [deaths, setDeaths] = useState(0);
    const [character_type, setCharacter_Type] = useState('');
    const [auth_notes, setAuth_Notes] = useState('');
    const [comments, setComments] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);


    
    const submitData = async (character) => {
        try {
            let response = await addCharacter(character);

            if (response) {
                setSuccess(true);
                console.log("Yoda");
            }
        }
        catch (e) {
            setError(e.message);
        }
    }

    const submitCharacter = (e) => {
        e.preventDefault();

        setSuccess(false);
        setError('');

        if (first_name && surname && gender && age && deaths && character_type && auth_notes && comments) {
            let character = {
                first_name: first_name,
                surname: surname,
                gender: gender,
                age: age,
                deaths: deaths,
                character_type: character_type,
                auth_notes: auth_notes,
                comments: comments
            };
            
            submitData(character);
        }

        else {
            setError('All fields must contain a value');
        }

        <Container>
            <Alert show={success} variant="success">
                <Alert.Heading>Success!</Alert.Heading>
                <p>You have successfully added a new character to the service!</p>
            </Alert>
            <Alert show={(error !== '') ? false : true} variant="danger">
                <Alert.Heading>An Error has Occured!</Alert.Heading>
                <p>{error}</p>
            </Alert>
        </Container> 

    }
    return (
        <div className='add-characters'>
            <h1>Add Characters</h1>
            <Container>
                <Form onSubmit={submitCharacter}>
                    <Form.Group className='mb-4' controlId='first_name'>
                        <Form.Label>First name:</Form.Label>
                        <Form.Control 
                            type='text'
                            placeholder='Enter First Name'
                            onChange={e => setFirst_Name(e.target.value)}
                            required/>
                    </Form.Group>
                    <Form.Group className='mb-4' controlId='surname'>
                        <Form.Label>Surname:</Form.Label>
                        <Form.Control 
                            type='text'
                            placeholder='Enter Surname'
                            onChange={e => setSurname(e.target.value)}
                            required/>
                    </Form.Group>
                    <Form.Group className='mb-4' controlId='gender'>
                        <Form.Label>Gender:</Form.Label>
                        <Form.Control 
                            type='text'
                            placeholder='Enter gender'
                            onChange={e => setGender(e.target.value)}
                            required/> 
                            
                    </Form.Group>
                    <Form.Group className='mb-4' controlId='age'>
                        <Form.Label>Age:</Form.Label>
                        <Form.Control 
                            type='number'
                            step='1'
                            placeholder='0'
                            onChange={e => setAge(e.target.value)}
                            required/>
                    </Form.Group>
                    <Form.Group className='mb-4' controlId='deaths'>
                        <Form.Label>Deaths:</Form.Label>
                        <Form.Control 
                            type='number'
                            step='1'
                            placeholder='0'
                            onChange={e => setDeaths(e.target.value)}
                            required/>
                    </Form.Group>
                    <Form.Group className='mb-4' controlId='character_type'>
                        <Form.Label>Character type:</Form.Label>
                        {/* <Form.Control 
                            type='text'
                            placeholder='Enter type'
                            onChange={e => setCharacter_Type(e.target.value)}
                            required/> */}
                            <Form.Select aria-label="Default select example" onChange={e => setCharacter_Type(e.target.value)}
                            required>
                                <option>Choose type of character</option>
                                <option value="demon">Demon</option>
                                <option value="giant">Giant</option>
                                <option value="god">God</option>
                                <option value="goddess">Goddess</option>
                                <option value="monster">Monster</option>
                                <option value="mortal">Mortal</option>
                                <option value="primordial">Primordial</option>
                            </Form.Select>
                            
                           
                    </Form.Group>
                    <Form.Group className='mb-4' controlId='auth_notes'>
                        <Form.Label>Author notes:</Form.Label>
                        <Form.Control 
                            type='text'
                            placeholder='Enter author notes'
                            onChange={e => setAuth_Notes(e.target.value)}
                            required/>
                    </Form.Group>
                    <Form.Group className='mb-4' controlId='comments'>
                        <Form.Label>Comments:</Form.Label>
                        <Form.Control 
                            type='text'
                            placeholder='Enter comments'
                            onChange={e => setComments(e.target.value)}
                            required/>
                    </Form.Group>
                    <Button variant='primary' type='submit'>
                        Add Character
                    </Button>
                </Form>
            </Container>
        </div>
    );
}

export default AddCharacters;