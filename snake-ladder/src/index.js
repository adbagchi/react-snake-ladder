import React from 'react';
import ReactDOM from 'react-dom';
import SnakeLadder from './component/SnakeLadder';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<SnakeLadder />, document.getElementById('root'));
registerServiceWorker();
