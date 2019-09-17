import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* addScore(action) {
    try {
        const response = yield axios.post('/api/decision', action.payload);
        yield put({
            type: 'SET_SCORE_MATRIX',
            payload: {
                ...action.payload,
                id: response.data,
            }
        });
        } catch (err) {
        console.log('error HELP:', err);
    }
}

function* scoreSaga() {
    yield takeLatest('SET_SCORE', addScore);
}

export default scoreSaga;