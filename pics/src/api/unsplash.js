import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 7e35d6dbe36c0f77b970f0ae549217a255efd2848716e226a3d9eae3d1468982'
    }
})