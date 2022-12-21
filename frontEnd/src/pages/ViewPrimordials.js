import { useEffect, useState } from 'react';
import { Container, Alert, CardGroup } from 'react-bootstrap';
import './ViewPrimordials.css';
import { getPrimordials } from '../actions/actions';
import PrimordialCard from '../components/cards/PrimordialCard';


function ViewPrimordials() {
    const [primordials, setPrimordials] = useState([]);
    const [error, setError] = useState([null]);

    useEffect(() => {
        if (primordials.length <= 0) {
            const fetchData = async () => {
                try {
                    let data = await getPrimordials();
                    setPrimordials(data);
                    //console.log(data)
                }
                catch (e) {
                    setError(e.message);
                }
            }
            fetchData();
        }
    }, [primordials])

    if (primordials.length > 0) {
        return (
            <div className='view-primordials'>
                <Container>
                    <h1>View Primordials</h1>
                    <CardGroup>
                        <div className='primordial-card-grid'>
                            {primordials.map((primordials) => {
                                return (
                                    <PrimordialCard
                                        key={[primordials].id}
                                        department={primordials.department}
                                    />
                                );
                            })}
                        </div>
                    </CardGroup>
                </Container>
            </div>
        );
    }
    else if (error || primordials.length === 0) {
        return (
            <div className='view-primordials'>
                <Container>
                    <h1>View Primordials</h1>
                    <Alert variant='danger'>
                        <Alert.Heading> An error has Occured </Alert.Heading>
                        <p>{(error !== null) ? error : "you currently hae no characters avaliable in your service."}  </p>
                    </Alert>
                </Container>
            </div>
        );
    }
}

export default ViewPrimordials;