import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* addFactorWeight(action) {
    try {
        const response = yield axios.post('/api/decision', action.payload);
        yield put({
            type: 'SET_FACTOR_WEIGHT_MATRIX',
            payload: {
                ...action.payload,
                id: response.data,
            }
        });
        } catch (err) {
        console.log('error HELP:', err);
    }
}

function* factorWeightSaga() {
    yield takeLatest('SET_FACTOR_WEIGHT', addFactorWeight);
}

export default factorWeightSaga;