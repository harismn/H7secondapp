import { call, put, takeLatest } from 'redux-saga/effects'
import { 
    DASHBOARD_ACTION,
    DashboardAction
 } from '../modules/dasboard'
 import { dasboard } from '../api/dasboard'


 function* getCard() {
     try {
         const { data } = yield call ( dasboard.getCard) 
         if(data){
            yield put(DashboardAction.fullfilled(data.words))
         }
     }
     catch(e) {
         console.log(e);
     }
 }

 export const cardSaga = [
    takeLatest(DASHBOARD_ACTION.REQUEST, getCard),
  ]
  