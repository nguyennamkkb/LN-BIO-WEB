import axios from 'axios'

const baseDomain = 'http://127.0.0.1:4444/'
const baseUrl = `${baseDomain}ln-bio-api` // or `${baseDomain}/api/v1`

const service = axios.create({
    baseURL: baseUrl, // api 的 base_url
    timeout: 5000, // request timeout

})
export default service

