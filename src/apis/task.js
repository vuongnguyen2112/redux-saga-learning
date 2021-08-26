import axiosService from "../commons/axiosService";
import {API_ENDPOINT} from "../constants";
import qs from "query-string";

const url = 'tasks';


export const getList = (params = {}) => {
    let queryParams = '';
    if (Object.keys(params).length > 0) {
        queryParams = `?${qs.stringify(params)}`;
    }
    return axiosService.get(`${API_ENDPOINT}/${url}${queryParams}`);
};

// http://localhost:3000/tasks :POST
export const addTask = data => {
    return axiosService.post(`${API_ENDPOINT}/${url}`, data);
}

// http://localhost:3000/tasks/:id :PUT
export const updateTask = (data, taskID) => {
    return axiosService.put(`${API_ENDPOINT}/${url}/${taskID}`, data);
}