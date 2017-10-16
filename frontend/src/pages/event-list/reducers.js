import EVENT_LIST from './constants';

export default function eventList(state = { status: 'initial' }, action) {
  switch (action.type) {
    case EVENT_LIST: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
