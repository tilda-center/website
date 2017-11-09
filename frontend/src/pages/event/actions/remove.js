import { createAction } from 'redux-actions';
import { fetch } from '../../../utils';
import { apiUrl } from '../../../constants';
import { EVENT_REMOVE } from '../constants';


const reset = createAction(EVENT_REMOVE, () => ({
  status: 'initial',
}));


const begin = createAction(EVENT_REMOVE, () => ({
  status: 'pending',
}));


const success = createAction(EVENT_REMOVE, event => ({
  event,
  status: 'success',
}));


const fail = createAction(EVENT_REMOVE, error => ({
  error,
  status: 'error',
}));


const remove = (id) =>
  (dispatch) => {
    dispatch(begin());
    fetch({
      url: `${apiUrl}/events/${id}`,
      method: 'delete',
    })
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
  remove,
};


export default actions;
