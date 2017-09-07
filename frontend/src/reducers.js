import { combineReducers } from 'redux';
import login from './pages/login/reducers';
import settingsOpen from './pages/home/reducers';
import settings from './templates/default/reducers';
import theme from './containers/reducers';


const reducers = {
  login,
  settingsOpen,
  theme,
};

settings.forEach(reducer => { reducers[reducer.name] = reducer; });


const rootReducer = combineReducers(reducers);

export default rootReducer;
