import { combineReducers } from 'redux';

// Containers
import theme from './containers/reducers';

// Templates
import settings from './templates/default/reducers';

// Pages
import { event, eventSet, eventPublish, eventRemove } from './pages/event/reducers';
import eventCreate from './pages/home/reducers';
import eventList from './pages/event-list/reducers';
import login from './pages/login/reducers';


const reducers = {
  event,
  eventCreate,
  eventList,
  eventPublish,
  eventRemove,
  eventSet,
  login,
  settings,
  theme,
};


export default combineReducers(reducers);
