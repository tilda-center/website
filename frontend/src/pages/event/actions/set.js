import { createAction } from 'redux-actions';
import { fetch } from '../../../utils';
import { apiUrl } from '../../../constants';
import { EVENT_SET } from '../constants';


const reset = createAction(EVENT_SET, () => ({
  status: 'initial',
}));


const begin = createAction(EVENT_SET, () => ({
  status: 'pending',
}));


const success = createAction(EVENT_SET, event => ({
  event,
  status: 'success',
}));


const fail = createAction(EVENT_SET, error => ({
  error: error.message,
  status: 'error',
}));


const set = (id, fields) =>
  (dispatch) => {
    dispatch(begin());
    fetch({ 
      url: `${apiUrl}/events/${id}`,
      method: 'PATCH',
      body: fields,
    })
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
  set,
};


export default actions;
