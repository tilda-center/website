import { combineReducers } from 'redux'

// atoms
import {
  authReducer,
  logoutReducer,
  meReducer,
  refreshReducer,
} from 'components/atoms/protected/reducers'

// organisms
import cfsFocusReducer from 'components/organisms/price-box/reducers'

// pages
import { blogDetailReducer, blogDetailEditReducer } from 'pages/blog-detail/reducers'
import { blogListReducer } from 'pages/blog-list/reducers'
import loginReducer from 'pages/login/reducers'

// templates
import errorReducer from 'templates/empty/reducers'
import titleReducer from 'templates/default/reducers'

export default combineReducers({
  auth: authReducer,
  blogDetail: blogDetailReducer,
  blogDetailEdit: blogDetailEditReducer,
  blogList: blogListReducer,
  error: errorReducer,
  login: loginReducer,
  logout: logoutReducer,
  me: meReducer,
  cfsFocus: cfsFocusReducer,
  refresh: refreshReducer,
  title: titleReducer,
})
