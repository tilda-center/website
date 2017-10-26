import { createAction } from 'redux-actions';
import { fetch } from '../../../utils';
import { apiUrl } from '../../../constants';
import { EVENT } from '../constants';

const reset = createAction(EVENT, () => ({
  status: 'initial',
}));


const begin = createAction(EVENT, () => ({
  status: 'pending',
}));


const success = createAction(EVENT, event => ({
  event,
  status: 'success',
}));


const fail = createAction(EVENT, error => ({
  error,
  status: 'error',
}));


const get = (id) =>
  (dispatch) => {
    dispatch(begin());
    fetch({ url: `${apiUrl}/events/${id}` })
      .then(response => {
        response.json()
          .then(event => {
            dispatch(success(event));
            return event;
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
