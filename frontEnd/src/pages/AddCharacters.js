import { useState } from 'react';
import { Form, Container, Button, Alert } from 'react-bootstrap';
import {AddCharacter} from '../actions/actions';
import './AddCharacters.css';

function AddCharacters() {
    return (
        <div className='add-characters'>
            <h1>Add Characters</h1>
            <Container>
                <Form>
                    <Form.Group className='mb-4' controlId='first_name'>
                        <Form.Label>First name:</Form.Label>
                    </Form.Group>
                    <Form.Group className='mb-4' controlId='surname'>
                        <Form.Label>Surname:</Form.Label>
                    </Form.Group>
                    <Form.Group className='mb-4' controlId='gender'>
                        <Form.Label>Gender:</Form.Label>
                    </Form.Group>
                    <Form.Group className='mb-4' controlId='age'>
                        <Form.Label>Age:</Form.Label>
                    </Form.Group>
                    <Form.Group className='mb-4' controlId='deaths'>
                        <Form.Label>Deaths:</Form.Label>
                    </Form.Group>
                    <Form.Group className='mb-4' controlId='character_type'>
                        <Form.Label>Character type:</Form.Label>
                    </Form.Group>
                    <Form.Group className='mb-4' controlId='auth_notes'>
                        <Form.Label>Author notes:</Form.Label>
                    </Form.Group>
                    <Form.Group className='mb-4' controlId='comments'>
                        <Form.Label>Comments:</Form.Label>
                    </Form.Group>
                    <Button variant='primary' type='submit'>
                        Add Character
                    </Button>
                </Form>
            </Container>
        </div>
    );
}

export default AddCharacters;