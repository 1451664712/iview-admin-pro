import {get, post} from "../utils/axios";

export const login = (data) => post('/v1/login', data)

export const getApplication = () => post('/application/queryApplicationListAllInfo')
