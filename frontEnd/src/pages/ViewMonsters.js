import { useEffect, useState } from 'react';
import { Container, Alert, CardGroup } from 'react-bootstrap';
import './ViewCharacters.css';
import { getMonsters } from '../actions/actions';
import MonsterCard from '../components/cards/MonsterCard';


function ViewMonsters() {
    const [monsters, setMonsters] = useState([]);
    const [error, setError] = useState([null]);

    useEffect(() => {
        if (monsters.length <= 0) {
            const fetchData = async () => {
                try {
                    let data = await getMonsters();
                    setMonsters(data);
                    //console.log(data)
                }
                catch (e) {
                    setError(e.message);
                }
            }
            fetchData();
        }
    }, [monsters])

    if (monsters.length > 0) {
        return (
            <div className='view-monsters'>
                <Container>
                    <h1>View Monster Data</h1>
                    <CardGroup>
                    <div className='monster-card-grid'>
                            {monsters.map((monsters) => {
                                return (
                                    <MonsterCard
                                    key={monsters.id}
                                    monster_type={monsters.monster_type}
                                    abilities={monsters.abilities}
                                    />
                                );
                            })}
                        </div>
                    </CardGroup>
                </Container>
            </div>
        );
    }
    else if (error || monsters.length === 0) {
        return (
            <div className='view-monsters'>
                <Container>
                    <h1>View Monsters</h1>
                    <Alert variant='danger'>
                        <Alert.Heading> An error has Occured </Alert.Heading>
                        <p>{(error !== null) ? error : "you currently hae no characters avaliable in your service."}  </p>
                    </Alert>
                </Container>
            </div>
        );
    }
}

export default ViewMonsters;