import { useParams } from 'react-router-dom';
import './UpdateCharacters.css';
import {updateCharacter} from '../actions/actions';
import { useEffect, useState } from 'react';
import { Form, Container, Button, Alert } from 'react-bootstrap';
import { getCharacterOne as getCharacter} from '../actions/actions';
import CharacterCard from '../components/cards/CharacterCard';

function UpdateCharacters(){
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

    const { id } = useParams();
    const [characters, setCharacters] = useState([]);
    const [char, setChar] = useState([]);
    
    useEffect(() => {
        if (characters.length <= 0){
            const fetchData = async () => {
                try {
                    let data = await getCharacter(id);
                    setCharacters(data);
                   //Test Load
                    console.log(data)
                }
                catch (e) {
                    setError(e.message);
                }
            }
            //?
            //fetches all data of characters but might cause error
            fetchData();
        }
    }, [characters])
    //logs the character
//console.log(characters);


const submitData = async (c) => {
    try {
        console.log(c)
        let response = await updateCharacter(c);

        if (response) {
            setSuccess(true);
         //   console.log(setSuccess);
         
        }
    }
    catch (e) {
        setError(e.message);
    }
}

const submitCharacter = async (e) => {
    e.preventDefault();

    setSuccess(false);
    setError('');
    console.log(first_name);
    if (first_name != null|| surname || gender || age || deaths || character_type || auth_notes || comments) {
        
        const charr = ({
            id: id,
            first_name: (first_name == "") ? null : first_name,
            surname: (surname == "") ? null : surname,
            gender: (gender == "") ? null : gender,
            age: (age == 0) ? null : age,
            deaths: (deaths == 0) ? null : deaths,
            character_type: (character_type == "") ? null : character_type,
            auth_notes: (auth_notes == "") ? null : auth_notes,
            comments: (comments == "") ? null : comments
        });

        for (const [key, value] of Object.entries(charr)) {
            if (value == null) {
                delete charr[key]
            }
        }
        
        console.log(charr);
        
        try {
            console.log(charr) // charr is used here instead of c
            let response = await updateCharacter(charr); // charr is passed to updateCharacter here

            if (response) {
                setSuccess(true);
                window.location.assign("/viewchar"); // Redirect to the viewchar page
            }
        } catch (e) {
            setError(e.message);
        }
    } else {
        setError('A field must contain a value');
    }

    <Container>
        <Alert show={success} variant="success">
            <Alert.Heading>Success!</Alert.Heading>
            <p>You have successfully updated a character to the service!</p>
        </Alert>
        <Alert show={(error !== '') ? false : true} variant="danger">
            <Alert.Heading>An Error has Occured!</Alert.Heading>
            <p>{error}</p>
        </Alert>
    </Container> 
};

return (
    <div className='update-characters'>
        <h1>Update Character</h1>
        <Container>
            <Form onSubmit={submitCharacter}>
                <Form.Group className='form-group' controlId='first_name'>
                    <label>First name:</label>
                    <Form.Control 
                        type='text'
                        placeholder={characters.first_name}
                        onChange={e => setFirst_Name(e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1))}
                        />
                </Form.Group>
                <Form.Group className='form-group' controlId='surname'>
                    <label>Surname:</label>
                    <Form.Control 
                        type='text'
                        placeholder={characters.surname}
                        onChange={e => setSurname(e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1))}
                        />
                </Form.Group>
                <Form.Group className='form-group' controlId='gender'>
                    <label>Gender:</label>
                    {/* <Form.Control 
                        type='text'
                        placeholder={characters.gender}
                        onChange={e => setGender(e.target.value)}
                        />  */}
                        <Form.Select aria-label="Default select example" placeholder={characters.gender} onChange={e => setGender(e.target.value)}
                        >
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
                        placeholder={characters.age}
                        onChange={e => setAge(e.target.value)}
                        />
                </Form.Group>
                <Form.Group className='form-group' controlId='deaths'>
                    <label>Deaths:</label>
                    <Form.Control 
                        type='number'
                        step='1'
                        placeholder={characters.deaths}
                        onChange={e => setDeaths(e.target.value)}
                        />
                </Form.Group>
                <Form.Group className='form-group' controlId='character_type'>
                    <label>Character type:</label>
                    {/* <Form.Control 
                        type='text'
                        placeholder='Enter type'
                        onChange={e => setCharacter_Type(e.target.value)}
                        required/> */}
                        <Form.Select aria-label="Default select example" placeholder={characters.character_type} onChange={e => setCharacter_Type(e.target.value)}
                        >
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
                        placeholder={characters.auth_notes}
                        onChange={e => setAuth_Notes(e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1))}
                        />
                </Form.Group>
                <Form.Group className='form-group' controlId='comments'>
                    <label>Comments:</label>
                    <Form.Control 
                        type='text'
                        placeholder={characters.comments}
                        onChange={e => setComments(e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1))}
                        />
                </Form.Group>
                <Button variant='primary' type='submit'>
                    Update Character
                </Button>
            </Form>
        </Container>
    </div>
);
}

export default UpdateCharacters;


//change label to label
// and className='form-group'