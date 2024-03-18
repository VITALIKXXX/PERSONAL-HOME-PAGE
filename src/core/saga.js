import { all } from 'redux-saga/effects';
import { personalHomepageSaga } from '../features/personalHomePage/personalHomapegeSaga';

export default function* saga() {
    yield all([
        personalHomepageSaga(),
    ]);
}