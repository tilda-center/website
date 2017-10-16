import { createAction } from 'redux-actions';
import { fetch } from '../../utils';
import { apiUrl } from '../../constants';
import EVENT_LIST from './constants';


const reset = createAction(EVENT_LIST, () => ({
  status: 'initial',
}));


const begin = createAction(EVENT_LIST, () => ({
  status: 'pending',
}));


const success = createAction(EVENT_LIST, events => ({
  events,
  status: 'success',
}));


const fail = createAction(EVENT_LIST, error => ({
  error: error.message,
  status: 'error',
}));


const get = () =>
  (dispatch) => {
    dispatch(begin());
    fetch({ url: `${apiUrl}/events` })
      .then(token => {
        dispatch(success(token));
        return token;
      })
      .catch(error => {
        dispatch(fail(error));
      });
  };


const actions = {
  reset,
  begin,
  success,
  fail,
  get,
};


export default actions;
