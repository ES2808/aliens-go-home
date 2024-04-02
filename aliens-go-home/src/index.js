//Refactor this file to initialize the redux stor and pass the game
//container, which will fetch the message and pass to app.
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css';
import Game from './containers/Game';
import reducer from './reducers';
//import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)
ReactDOM.render(
    <Provider store={store}>
    <Game />
    </Provider>,
    document.getElementById('root'),
);
registerServiceWorker();
