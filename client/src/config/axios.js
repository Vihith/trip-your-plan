import Axios from 'axios'

// 'http://localhost:3005' ||
const axios = Axios.create({
    baseURL:  '/'
})

export default axios