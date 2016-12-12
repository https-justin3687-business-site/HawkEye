import { syncHistoryWithStore } from 'react-router-redux';
import { hashHistory } from 'react-router';

import reducers from 'Reducers/Index';
import configureStore from 'Core/ConfigureStore';
import { renderApplication } from 'Core/Renderer';
import routes from 'Routes';

// Create the store/history
const store   = configureStore(reducers);
const history = syncHistoryWithStore(hashHistory, store);

const renderTarget = document.getElementById('root');

// Render the application
renderApplication(renderTarget, store, history, routes);