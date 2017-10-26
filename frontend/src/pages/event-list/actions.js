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


const success = createAction(EVENT_LIST, (events, headers) => ({
  events,
  headers,
  status: 'success',
}));


const fail = createAction(EVENT_LIST, error => ({
  error: error.message,
  status: 'error',
}));


const get = (page = 1) =>
  (dispatch) => {
    dispatch(begin());
    fetch({
      page,
      url: `${apiUrl}/events`,
    })
      .then(response => {
        response.json()
          .then(events => {
            dispatch(success(events, response.headers));
            return events;
          });
        return response;
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
