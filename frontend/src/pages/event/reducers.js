import EVENT from './constants';

export default function event(state = { status: 'initial' }, action) {
  switch (action.type) {
    case EVENT: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
