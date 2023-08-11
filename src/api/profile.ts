import service from '../plugins/axios'
const resource = '/share';


export function getProfile(id: string) {
    return service.get(`${resource}/bio/`+id)
}
