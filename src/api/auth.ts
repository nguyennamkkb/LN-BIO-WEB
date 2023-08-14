import service from '../plugin/axios'
const resource = '/auth';


export default {

    login(playload: any) {
        return  service.post(`${resource}/signin`, playload)
    }
}
