import service from '../plugins/axios'
const resource = '/auth';


export function login(playload:ObjLogin) {
    return service.get(`${resource}/bio/`,playload)
}
