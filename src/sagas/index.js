import {fork, take, call, put, delay, takeLatest, select, takeEvery} from "redux-saga/effects";
import * as taskTypes from "../constants/task";
import {getList} from "../apis/task";
import {STATUS_CODE} from "../constants";
import {fetchListTaskFailed, fetchListTaskSuccess, filterTaskSuccess} from "../actions/task";
import {hideLoading, showLoading} from "../actions/ui";

function* watchFetchListTask() {
    while (1) {
        yield take(taskTypes.FETCH_TASK);
        yield put(showLoading());
        const res = yield call(getList);
        const {data, status} = res;
        if (status === STATUS_CODE.SUCCESS) {
            yield put(fetchListTaskSuccess(data));
        } else {
            yield put(fetchListTaskFailed(data));
        }
        yield delay(1000);
        yield put(hideLoading());
    }
}

function* filterTaskSaga({payload}) {
    yield delay(500);
    const {keyword} = payload;
    const list = yield select(state => state.task.listTask);
    const filterTask = list.filter(task => task.title.trim().toLowerCase().includes(keyword.trim().toLowerCase()));
    yield put(filterTaskSuccess(filterTask));
}

function* rootSaga() {
    yield fork(watchFetchListTask);
    yield takeLatest(taskTypes.FILTER_TASK, filterTaskSaga)
}

export default rootSaga;