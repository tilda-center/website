import { combineReducers } from 'redux';

// Containers
import theme from './containers/reducers';

// Templates
import settings from './templates/default/reducers';

// Pages
import { event, eventSet } from './pages/event/reducers';
import eventList from './pages/event-list/reducers';
import login from './pages/login/reducers';


const reducers = {
  event,
  eventList,
  eventSet,
  login,
  settings,
  theme,
};


export default combineReducers(reducers);
