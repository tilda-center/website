import { EVENT, EVENT_SET } from './constants';


export function event(state = { status: 'initial' }, action) {
  switch (action.type) {
    case EVENT: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}


export function eventSet(state = { status: 'initial' }, action) {
  switch (action.type) {
    case EVENT_SET: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
