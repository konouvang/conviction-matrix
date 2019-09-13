import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* addDecisionItem(action) {
    try {
        const response = yield axios.post('/api/decision', action.payload);
        yield put({
            type: 'SET_DECISION_MATRIX',
            payload: {
                ...action.payload,
                id: response.data,
            }
        });
        } catch (err) {
        console.log('error HELP:', err);
    }
}

function* decisionItemSaga() {
    yield takeLatest('SET_DECISION', addDecisionItem);
}

export default decisionItemSaga;