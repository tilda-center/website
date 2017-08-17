import { combineReducers } from 'redux';
import login from './pages/login/reducers';
import settings from './templates/default/reducers';
import theme from './containers/reducers';


const reducers = {
  login,
  theme,
};

settings.forEach(reducer => { reducers[reducer.name] = reducer; });


const rootReducer = combineReducers(reducers);

export default rootReducer;
