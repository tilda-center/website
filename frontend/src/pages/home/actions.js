import { createAction } from 'redux-actions';
import { fetch } from '../../utils';
import { apiUrl } from '../../constants';
import EVENT_CREATE from './constants';


const reset = createAction(EVENT_CREATE, () => ({
  status: 'initial',
}));


const begin = createAction(EVENT_CREATE, () => ({
  status: 'pending',
}));


const success = createAction(EVENT_CREATE, (event) => ({
  event,
  status: 'success',
}));


const fail = createAction(EVENT_CREATE, (error) => ({
  error: error.message,
  status: 'error',
}));


const create = (title, date, markdown) =>
  (dispatch) => {
    dispatch(begin());
    fetch({
      url: `${apiUrl}/events`,
      body: {
        title,
        date,
        markdown,
      },
      method: 'POST',
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
  create,
};


export default actions;
