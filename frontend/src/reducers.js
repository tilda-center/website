import { combineReducers } from 'redux';
import login from './pages/login/reducers';
import settings from './templates/default/reducers';
import theme from './containers/reducers';


const reducers = {
  login,
  settings,
  theme,
};


export default combineReducers(reducers);
