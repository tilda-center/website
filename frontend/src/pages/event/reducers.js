import { EVENT, EVENT_SET, EVENT_PUBLISH, EVENT_REMOVE } from './constants';


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


export function eventPublish(state = { status: 'initial' }, action) {
  switch (action.type) {
    case EVENT_PUBLISH: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}


export function eventRemove(state = { status: 'initial' }, action) {
  switch (action.type) {
    case EVENT_REMOVE: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
