// import { put, takeEvery } from 'redux-saga/effects';
// import request from '../utils/request.js';
// import { message } from 'antd';

export function * getAdminData () {
//   yield takeEvery('GET_ADMIN_DATA', function * (action) {
  // const { type, status, page, step } = action.payload;
  // try {
  //   yield put({ type: 'ADMIN_DATA_LOADING', payload: true });
  //   const data = yield request({
  //     url: `/task/manage/?datum_type=${type}&status=${status}${step ? `&task_type=${step}` : ''}&page=${page}`
  //   }).then(res => res);
  //   yield put({ type: 'ADMIN_DATA_CHANGE', payload: data });
  //   yield put({ type: 'ADMIN_DATA_LOADING', payload: false });
  // } catch (err) {
  //   yield put({ type: 'ADMIN_DATA_LOADING', payload: false });
  //   err.shouldShow && message.error(err.meta.msg);
  // }
//   });
}
