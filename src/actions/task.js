import * as taskApis from "./../apis/task";
import * as taskConstants from "../constants/task";

export const fetchListTask = () => {
    return {
        type: taskConstants.FETCH_TASK
    }
}

export const fetchListTaskSuccess = data => {
    return {
        type: taskConstants.FETCH_TASK_SUCCESS,
        payload: {
            data
        }
    };
}

export const fetchListTaskFailed = error => {
    return {
        type: taskConstants.FETCH_TASK_FAIL,
        payload: {
            error
        }
    };
}

/*
* B1: fetListTaskRequest
* B2: reset state tasks => []
* B3: fetchListTaskSuccess(data response)*/
export const fetchListTaskRequest = () => {
    return dispatch => {
        dispatch(fetchListTask());
        taskApis.getList().then(res => {
            const {data} = res;
            dispatch(fetchListTaskSuccess(data));
        }).catch(error => {
            dispatch(fetchListTaskFailed(error));
        });
    }
};