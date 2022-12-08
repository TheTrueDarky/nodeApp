import axios from 'axios';
const url = 'http://localhost:8900/';

const  getCharacter = async () => {
    let response = await axios.get (url + "characters").then(response => {
        return response.data;
    });

    return response;
};

const  getDemon = async () => {
    let response = await axios.get (url + "demons").then(response => {
        return response.data;
    });

    return response;
};

const addCharacter = async (character) => {
    let response = await axios.post(url + "characters", character, {
        headers: {
            'Content-Type':'multipart/form-data'
        }
        
    }).then(response => {
        return response.data;
    });

    return response;
}

export {getCharacter, addCharacter, getDemon};