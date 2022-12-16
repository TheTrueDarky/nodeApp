import { useEffect, useState } from 'react';
import { Container, Alert, Form } from 'react-bootstrap';
import './ViewCharacters.css';
import './search.css';
import { getCharacter } from '../actions/actions';
import CharacterCard from '../components/cards/CharacterCard';

function ViewCharacters() {
    const [characters, setCharacters] = useState([]);
    const [error, setError] = useState([null]);
    const [searchQuery, setSearchQuery] = useState('');
    const [characterType, setCharacterType] = useState(''); // added state for character type
    const [gender, setGender] = useState(''); // added state for gender filter
    useEffect(() => {
        if (characters.length <= 0) {
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
    const filteredCharacters = characters
        .filter(character => character.first_name.toLowerCase().includes(searchQuery.toLowerCase()))
        .filter(character => characterType === '' || character.character_type === characterType) // added character type filter
        .filter(character => gender === '' || character.gender === gender); // added gender filter

    if (characters.length > 0) {
        return (
            <div className='view-characters'>
                <Container>
                    <h1>View Characters</h1>
                    <div className="search-box character-type-filter gender-filter">
                        <input type="text" placeholder={"Search"} value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                        <Form.Control as="select" value={characterType} onChange={(e) => setCharacterType(e.target.value)}>
                            <option value="">All Types</option>
                            <option value="Demon">Demon</option>
                            <option value="Giant">Giant</option>
                            <option value="God">God</option>
                            <option value="Goddess">Goddess</option>
                            <option value="Monster">Monster</option>
                            <option value="Mortal">Mortal</option>
                            <option value="Primordial">Primordial</option>
                        </Form.Control>
                        <Form.Control as="select" value={gender} onChange={(e) => setGender(e.target.value)}>
                            <option value="">All Genders</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </Form.Control>
                    </div>

                    <div className="character-card-grid">
                        {
                            filteredCharacters.map((character) => {
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
    else if (error || characters.length === 0) {
        return (
            <div className='view-characters'>
                <Container>
                    <h1>View Characters</h1>
                    <Alert variant='danger'>
                        <Alert.Heading> An error has Occured </Alert.Heading>
                        <p>{(error !== null) ? error : "you currently have no characters available in your service."}  </p>
                    </Alert>
                </Container>
            </div>
        );
    }
    return (
        <div className='view-characters'>
            <Container>
                <h1>View Characters</h1>
                <Alert variant='info'>
                    <Alert.Heading>Loading...</Alert.Heading>
                </Alert>
            </Container>
        </div>
    );
}

export default ViewCharacters;