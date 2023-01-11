import { useEffect, useState } from 'react';
import { Container, Alert, CardGroup } from 'react-bootstrap';
import './ViewMortals.css';
import { getMortals } from '../actions/actions';
import MortalCard from '../components/cards/MortalCard';


function ViewMortals() {
    const [mortals, setMortals] = useState([]);
    const [error, setError] = useState([null]);

    useEffect(() => {
        if (mortals.length <= 0) {
            const fetchData = async () => {
                try {
                    let data = await getMortals();
                    setMortals(data);
                    //console.log(data)
                }
                catch (e) {
                    setError(e.message);
                }
            }
            fetchData();
        }
    }, [mortals])

    if (mortals.length > 0) {
        return (
            <div className='view-mortals'>
                <Container>
                    <h1>View Mortal Data</h1>
                    <CardGroup>
                        <div className='mortal-card-grid'>
                            {mortals.map((mortals) => {
                                return (
                                    <MortalCard
                                        key={[mortals].id}
                                        job={mortals.job}
                                    />
                                );
                            })}
                        </div>

                    </CardGroup>
                </Container>
            </div>
        );
    }
    else if (error || mortals.length === 0) {
        return (
            <div className='view-mortals'>
                <Container>
                    <h1>View Mortals</h1>
                    <Alert variant='danger'>
                        <Alert.Heading> An error has Occured </Alert.Heading>
                        <p>{(error !== null) ? error : "you currently hae no characters avaliable in your service."}  </p>
                    </Alert>
                </Container>
            </div>
        );
    }
}

export default ViewMortals;