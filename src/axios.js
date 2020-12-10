import axios from 'axios';

/* created an axios instance */
const instance = axios.create({
    baseURL: 'http://jsonplaceholder.typicode.com'
});

instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN from INSTANCE';

/* you can also create new interceptors */
/* instance.interceptors.request.use() */

export default instance;