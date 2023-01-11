import { useEffect, useState } from 'react';
import { Container, Alert, CardGroup } from 'react-bootstrap';
import './ViewGiants.css';
import { getGiants } from '../actions/actions';
import GiantCard from '../components/cards/GiantCard';


function ViewGiants() {
    const [giant, setGiants] = useState([]);
    const [error, setError] = useState([null]);
    
    useEffect(() => {
        if (giant.length <= 0){
            const fetchData = async () => {
                try {
                    let data = await getGiants();
                    setGiants(data);
                    //console.log(data)
                }
                catch (e) {
                    setError(e.message);
                }
            }
            fetchData();
        }
    }, [giant])

    if (giant.length > 0){
        return (
            <div className='view-giants'>
                <Container>
                    <h1>View Giant Data</h1>
                    <CardGroup>
                    <div className='giant-card-grid'>
                            {giant.map((giant) => {
                                return (
                                    <GiantCard 
                                    key={giant.id}
                                    role={giant.role}
                                    />
                                );
                            })}
                        </div>
                        
                    </CardGroup>
                </Container>
            </div>
        );
    }
    else if (error || giant.length === 0){
        return (
            <div className='view-giants'>
                <Container>
                    <h1>View Giants</h1>
                    <Alert variant='danger'>
                        <Alert.Heading> An error has Occured </Alert.Heading>
                        <p>{(error !== null ) ? error: "you currently hae no characters avaliable in your service."}  </p>
                    </Alert>
                </Container>
            </div>
        );
    }
}

export default ViewGiants;