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

        if (first_name && gender && age && deaths && character_type) {
            let nullFields = 0;

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
            

            if(nullFields == 0){
                submitData(character);
            }
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
                    <Form.Group className='form-group' controlId='first_name'>
                        <label>First name:</label>
                        <Form.Control 
                            type='text'
                            placeholder='Enter First Name'
                            onChange={e => setFirst_Name(e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1))}
                            required/>
                    </Form.Group>
                    <Form.Group className='form-group' controlId='surname'>
                        <label>Surname:</label>
                        <Form.Control 
                            type='text'
                            placeholder='Enter Surname'
                            onChange={e => setSurname(e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1))}
                            />
                    </Form.Group>
                    <Form.Group className='form-group' controlId='gender'>
                        <label>Gender:</label>
                            <Form.Select style={{ width: "75%", height: "45px" }} aria-label="Default select example" onChange={e => setGender(e.target.value)}
                            required>
                                <option>Choose Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </Form.Select>
                            
                    </Form.Group>
                    <Form.Group className='form-group' controlId='age'>
                        <label>Age:</label>
                        <Form.Control 
                            type='number'
                            step='1'
                            placeholder='0'
                            onChange={e => setAge(e.target.value)}
                            required/>
                    </Form.Group>
                    <Form.Group className='form-group' controlId='deaths'>
                        <label>Deaths:</label>
                        <Form.Control 
                            type='number'
                            step='1'
                            placeholder='0'
                            onChange={e => setDeaths(e.target.value)}
                            required/>
                    </Form.Group>
                    <Form.Group className='form-group' controlId='character_type'>
                        <label>Character type:</label>
                            <Form.Select style={{ width: "75%", height: "45px" }} aria-label="Default select example" onChange={e => setCharacter_Type(e.target.value)}
                            required>
                                <option>Choose type of character</option>
                                <option value="Demon">Demon</option>
                                <option value="Giant">Giant</option>
                                <option value="God">God</option>
                                <option value="Goddess">Goddess</option>
                                <option value="Monster">Monster</option>
                                <option value="Mortal">Mortal</option>
                                <option value="Primordial">Primordial</option>
                                <option value="Titan">Titan</option>
                                <option value="Titaness">Titaness</option>
                                <option value="Demi-god">Demi-god</option>
                            </Form.Select>
                            
                           
                    </Form.Group>
                    <Form.Group className='form-group' controlId='auth_notes'>
                        <label>Author notes:</label>
                        <Form.Control 
                            type='text'
                            placeholder='Enter author notes'
                            onChange={e => setAuth_Notes(e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1))}
                            />
                    </Form.Group>
                    <Form.Group className='form-group' controlId='comments'>
                        <label>Comments:</label>
                        <Form.Control 
                            type='text'
                            placeholder='Enter comments'
                            onChange={e => setComments(e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1))}
                            />
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