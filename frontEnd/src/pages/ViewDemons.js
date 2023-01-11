import { useEffect, useState } from 'react';
import { Container, Alert, CardGroup } from 'react-bootstrap';
import './ViewDemons.css';
import { getDemon } from '../actions/actions';
import DemonCard from '../components/cards/DemonCard';


function ViewDemons() {
    const [demon, setDemons] = useState([]);
    const [error, setError] = useState([null]);

    useEffect(() => {
        if (demon.length <= 0) {
            const fetchData = async () => {
                try {
                    let data = await getDemon();
                    setDemons(data);
                    //console.log(data)
                }
                catch (e) {
                    setError(e.message);
                }
            }
            fetchData();
        }
    }, [demon])

    if (demon.length > 0) {
        return (
            <div className='view-demons'>
                <Container>
                    <h1>View Demons</h1>
                    <CardGroup>
                        <div className='demon-card-grid'>
                            {demon.map((demon) => {
                                return (
                                    <DemonCard
                                        key={demon.id}
                                        demon_type={demon.demon_type}
                                        ability={demon.ability}
                                    />
                                );
                            })}
                        </div>

                    </CardGroup>
                </Container>
            </div>
        );
    }
    else if (error || demon.length === 0) {
        return (
            <div className='view-demons'>
                <Container>
                    <h1>View Demon Data</h1>
                    <Alert variant='danger'>
                        <Alert.Heading> An error has Occured </Alert.Heading>
                        <p>{(error !== null) ? error : "you currently hae no characters avaliable in your service."}  </p>
                    </Alert>
                </Container>
            </div>
        );
    }
}

export default ViewDemons;