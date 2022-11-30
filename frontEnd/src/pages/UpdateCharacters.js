import { useParams } from 'react-router-dom';
import './UpdateCharacters.css';

function UpdateCharacters() {
    const { id } = useParams();
    
    return (
        <div className='update-characters'>
            <h1>Update Characters</h1>
            <p>Character ID: {id}</p>
        </div>
    );
}

export default UpdateCharacters;