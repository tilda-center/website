import EVENT_CREATE from './constants';

export default function eventCreate(state = { status: 'initial' }, action) {
  switch (action.type) {
    case EVENT_CREATE: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
