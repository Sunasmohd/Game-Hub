import axios,{AxiosRequestConfig, CanceledError} from "axios"

export interface FetchRes<T> {
    count : number
    results : T[]
    next : string,
    previous : string
}


export const axiosService = axios.create({
    baseURL : 'https://api.rawg.io/api',
    params : {
        key : '15a50e6f274a469e990aca0b9b2a6772',
    }

})

class ApiClient<T>{
    requestConfig?:AxiosRequestConfig

    constructor(public endpoint:string ){
    }

    getAll = (config?:AxiosRequestConfig) => {
        return axiosService.get<FetchRes <T>>(this.endpoint,config).then(res=>res.data)
    }


    get = (id : number | string) => {
        return axiosService.get<T>(this.endpoint + '/' + id).then(res=>res.data)
    }

}

export default ApiClient
export {CanceledError}