import axios from 'axios';

export default axios.create({

    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization: 
        'Client-ID c1855bc1436b17510e403d4363124a84ef6eb7abf25b806327298d9f93dc9d46'
    }

});