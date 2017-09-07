import SETTINGS_DRAWER from './constants';

export default function settingsOpen(
  state = { status: 'initial', open: false },
  action,
) {
  switch (action.type) {
    case SETTINGS_DRAWER: {
      return action.payload;
    }
    default:
      return state;
  }
}
