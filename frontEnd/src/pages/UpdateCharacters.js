import { useParams } from 'react-router-dom';
import './UpdateCharacters.css';
import { updateCharacter } from '../actions/actions';
import { useEffect, useState } from 'react';
import { Form, Container, Button, Alert } from 'react-bootstrap';
import { getCharacterOne as getCharacter } from '../actions/actions';
import CharacterCard from '../components/cards/CharacterCard';

function UpdateCharacters() {
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
        if (characters.length <= 0) {
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

    const submitCharacter = (e) => {
        e.preventDefault();

        setSuccess(false);
        setError('');
        console.log(first_name);
        if (first_name != null || surname || gender || age || deaths || character_type || auth_notes || comments) {

            const charr = ({
                id: id,
                first_name: (first_name == "") ? null : first_name,
                surname: (surname == "") ? null : surname,
                gender: (gender == "") ? null : gender,
                age: (age == 0) ? null : age,
                deaths: (deaths == 0) ? null : deaths,
                character_type: (character_type == "") ? null : character_type,
                auth_notes: null,
                comments: null
            });
            for (const [key, value] of Object.entries(charr)) {
                if (value == null) {
                    delete charr[key]
                }
            }

            console.log(charr);

            submitData(charr);
        }

        else {
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
    }
    return (
        <div className='update-characters'>
            <h1>Update Character</h1>
            <Container>
                <Form onSubmit={submitCharacter}>
                    <Form.Group className='form-group'>
                        <label>First Name:</label>
                        <Form.Control type='text' value={first_name} onChange={(e) => setFirst_Name(e.target.value)} />
                    </Form.Group>
                    <Form.Group className='form-group'>
                        <label>Surname:</label>
                        <Form.Control type='text' value={surname} onChange={(e) => setSurname(e.target.value)} />
                    </Form.Group>
                    <Form.Group className='form-group'>
                        <label>Gender:</label>
                        <Form.Control type='text' value={gender} onChange={(e) => setGender(e.target.value)} />
                    </Form.Group>
                    <Form.Group className='form-group'>
                        <label>Age:</label>
                        <Form.Control type='number' value={age} onChange={(e) => setAge(e.target.value)} />
                    </Form.Group>
                    <Form.Group className='form-group'>
                        <label>Deaths:</label>
                        <Form.Control type='number' value={deaths} onChange={(e) => setDeaths(e.target.value)} />
                    </Form.Group>
                    <Form.Group className='form-group'>
                        <label>Character Type:</label>
                        <Form.Control type='text' value={character_type} onChange={(e) => setCharacter_Type(e.target.value)} />
                    </Form.Group>
                    <Form.Group className='form-group'>
                        <label>Author Notes:</label>
                        <Form.Control type='text' value={auth_notes} onChange={(e) => setAuth_Notes(e.target.value)} />
                    </Form.Group>
                    <Form.Group className='form-group'>
                        <label>Comments:</label>
                        <Form.Control type='text' value={comments} onChange={(e) => setComments(e.target.value)} />
                    </Form.Group>
                    <Button type='submit' variant='primary'>Submit</Button>
                </Form>
            </Container>
        </div>
    )
}

export default UpdateCharacters;

