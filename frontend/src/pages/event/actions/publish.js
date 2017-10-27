import { createAction } from 'redux-actions';
import { fetch } from '../../../utils';
import { apiUrl } from '../../../constants';
import { EVENT_PUBLISH } from '../constants';


const reset = createAction(EVENT_PUBLISH, () => ({
  status: 'initial',
}));


const begin = createAction(EVENT_PUBLISH, () => ({
  status: 'pending',
}));


const success = createAction(EVENT_PUBLISH, event => ({
  event,
  status: 'success',
}));


const fail = createAction(EVENT_PUBLISH, error => ({
  error,
  status: 'error',
}));


const publish = (id, fields) =>
  (dispatch) => {
    dispatch(begin());
    fetch({
      url: `${apiUrl}/events/${id}`,
      method: 'PATCH',
      body: fields,
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
  publish,
};


export default actions;
