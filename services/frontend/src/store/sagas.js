import { takeLatest } from 'redux-saga/effects'

// Actions
import { ME, REFRESH, LOGOUT } from 'components/atoms/protected/actions'
import { BLOG_DETAIL, BLOG_DETAIL_EDIT } from 'pages/blog-detail/actions'
import { BLOG_LIST } from 'pages/blog-list/actions'
import { LOGIN } from 'pages/login/actions'

// Sagas
import { blogDetailSaga, blogDetailEditSaga } from 'pages/blog-detail/sagas'
import { blogListSaga } from 'pages/blog-list/sagas'
import loginSaga from 'pages/login/sagas'
import { meSaga, refreshSaga, logoutSaga } from 'components/atoms/protected/sagas'


export default function* greenSaga() {
  yield takeLatest(BLOG_DETAIL, blogDetailSaga)
  yield takeLatest(BLOG_DETAIL_EDIT, blogDetailEditSaga)
  yield takeLatest(BLOG_LIST, blogListSaga)
  yield takeLatest(LOGIN, loginSaga)
  yield takeLatest(LOGOUT, logoutSaga)
  yield takeLatest(ME, meSaga)
  yield takeLatest(REFRESH, refreshSaga)
}
