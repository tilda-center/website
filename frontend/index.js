import React from 'react';
import ReactDOM from 'react-dom';
import Root from './containers/root';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
