import { useEffect, useState } from 'react';
import { Container, Alert, CardGroup } from 'react-bootstrap';
import './ViewDemons.css';
import { getGods } from '../actions/actions';
import GodCard from '../components/cards/GodCard';


function ViewGods() {
    const [god, setGods] = useState([]);
    const [error, setError] = useState([null]);
    
    useEffect(() => {
        if (god.length <= 0){
            const fetchData = async () => {
                try {
                    let data = await getGods();
                    setGods(data);
                    //console.log(data)
                }
                catch (e) {
                    setError(e.message);
                }
            }
            fetchData();
        }
    }, [god])

    if (god.length > 0){
        return (
            <div className='view-Gods'>
                <Container>
                    <h1>View Gods</h1>
                    <CardGroup>
                    <div className='god-card-grid'>
                            {god.map((god) => {
                                return (
                                    <GodCard
                                        key={god.id}
                                        responsibility={god.responsibility}
                                    />
                                );
                            })}
                        </div>
                    </CardGroup>
                </Container>
            </div>
        );
    }
    else if (error || god.length === 0){
        return (
            <div className='view-Gods'>
                <Container>
                    <h1>View Gods</h1>
                    <Alert variant='danger'>
                        <Alert.Heading> An error has Occured </Alert.Heading>
                        <p>{(error !== null ) ? error: "you currently hae no characters avaliable in your service."}  </p>
                    </Alert>
                </Container>
            </div>
        );
    }
}

export default ViewGods;