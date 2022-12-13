import axios from 'axios';
const url = 'http://localhost:8900/';

const  getCharacter = async () => {
    let response = await axios.get (url + "characters").then(response => {
        return response.data;
    });

    return response;
};

const  getDemon = async () => {
    let response = await axios.get (url + "demon").then(response => {
        return response.data;
    });

    return response;
};

const  getGiants = async () => {
    let response = await axios.get (url + "giant").then(response => {
        return response.data;
    });

    return response;
};

const  getGods = async () => {
    let response = await axios.get (url + "gods").then(response => {
        return response.data;
    });

    return response;
};

const  getMonsters = async () => {
    let response = await axios.get (url + "monsters").then(response => {
        return response.data;
    });

    return response;
};

const  getMortals = async () => {
    let response = await axios.get (url + "mortals").then(response => {
        return response.data;
    });

    return response;
};

const  getPrimordials = async () => {
    let response = await axios.get (url + "primordials").then(response => {
        return response.data;
    });

    return response;
};

const addCharacter = async (character) => {
    let response = await axios.post(url + "characters", character 
    //{
    //     headers: {
    //         'Content-Type':'multipart/form-data'
    //     }
        
    //}
    ).then(response => {
        return response.data;
    });

    return response;
}

export {getCharacter, addCharacter, getDemon, getGiants, getGods, getMonsters, getMortals, getPrimordials};