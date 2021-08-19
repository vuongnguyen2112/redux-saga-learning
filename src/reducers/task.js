import * as taskConstants from "../constants/task";
import {FETCH_TASK} from "../constants/task";

const initialState = {
    listTask: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case taskConstants.FETCH_TASK: {
            return {
                ...state,
                listTask: []
            }
        }
        case taskConstants.FETCH_TASK_SUCCESS: {
            const {data} = action.payload;
            return {
                ...state,
                listTask: [data][0]
            }
        }
        case taskConstants.FETCH_TASK_FAIL: {
            return {
                ...state,
                listTask: []
            }
        }
        default: return state;
    }
};

export default reducer;