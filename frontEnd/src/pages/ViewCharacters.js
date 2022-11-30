import { useEffect, useState } from 'react';
import { Container, Alert } from 'react-bootstrap';
import './ViewCharacters.css';


function ViewCharacters() {
    const [characters, setCharacters] = useState([]);
    const [error, setError] = useState([null]);
    
    if (characters.length > 0){
        return (
            <div className='view-characters'>
                <Container>
                    <h1>View Characters</h1>
                </Container>
            </div>
        );
    }
    else if (error || characters.length === 0){
        return (
            <div className='view-characters'>
                <Container>
                    <h1>View Characters</h1>
                    <Alert variant='danger'>
                        <Alert.Heading> An error has Occured </Alert.Heading>
                        <p>{(error !== null ) ? error: "you currently hae no characters avaliable in your service."}  </p>
                    </Alert>
                </Container>
            </div>
        );
    }
}

export default ViewCharacters;