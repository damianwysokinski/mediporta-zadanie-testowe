import axios from 'axios';

const fetchData = async (url: string) => {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error: any) {
        throw new Error(error.message);
    }
};

export default fetchData;