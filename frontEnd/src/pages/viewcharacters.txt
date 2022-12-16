import { useEffect, useState } from 'react';
import { Container, Alert } from 'react-bootstrap';
import './ViewCharacters.css';
import { getCharacter } from '../actions/actions';
import CharacterCard from '../components/cards/CharacterCard';

function ViewCharacters() {
    const [characters, setCharacters] = useState([]);
    const [error, setError] = useState([null]);

    useEffect(() => {
        if (characters.length <= 0){
            const fetchData = async () => {
                try {
                    let data = await getCharacter();
                    setCharacters(data);
                    console.log(data)
                }
                catch (e) {
                    setError(e.message);
                }
            }
            fetchData();
        }
    }, [characters])

    if (characters.length > 0){
        return (
            <div className='view-characters'>
                <Container>
                    <h1>View Characters</h1>
                    <div className="character-card-grid">
                        {
                            characters.map((character) => {
                                return <CharacterCard 
                                key={character.id}
                                id={character.id}
                                first_name={character.first_name}
                                surname={character.surname}
                                gender={character.gender}
                                age={character.age}
                                deaths={character.deaths}
                                character_type={character.character_type}
                                link_id={character.link_id}
                                
                                demon_type={"TESTING"}
                                auth_notes={character.auth_notes}
                                comments={character.comments}
                                
                                />
                            })
                        }
                    </div>
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
