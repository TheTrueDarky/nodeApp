import axios from 'axios';
const url = 'http://localhost:8900/';

const  getCharacters = async () => {
    let response = await axios.get (url + "characters").then(response => {
        return response.data;
    });

    return response;
};

export {getCharacters};