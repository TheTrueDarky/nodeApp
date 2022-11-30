import axios from 'axios';
const url = 'http://localhost:8900/';

const  getCharacters = async () => {
    let response = await axios.get (url + "characters").then(response => {
        return response.data;
    });

    return response;
};

const addCharacters = async (character) => {
    let response = await axios.post(url + "characters", character, {
        headers: {
            'Content-Type':'multipart/form-data'
        }
        
    }).then(response => {
        return response.data;
    });

    return response;
}

export {getCharacters, addCharacters};