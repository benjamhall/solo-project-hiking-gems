import { all } from 'redux-saga/effects';
import loginSaga from './login.saga';
import registrationSaga from './registration.saga';
import userSaga from './user.saga';
import getTrailsSaga from './getTrails.saga';
import postHikeSaga from './postHike.saga';
import deleteHikeSaga from './deleteHike.saga';
import addFavoriteSaga from './addFavorite.saga';
import getFavoritesSaga from './getFavorites.saga';
import addRatingSaga from './addRating.saga';
import getRatingsSaga from './getRatings.saga';

// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    loginSaga(), // login saga is now registered
    registrationSaga(),
    userSaga(),
    getTrailsSaga(),
    postHikeSaga(),
    deleteHikeSaga(),
    addFavoriteSaga(),
    getFavoritesSaga(),
    addRatingSaga(),
    getRatingsSaga(),
  ]);
}
