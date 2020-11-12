import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './redux/reducers';

// Components
import DashboardView from './components/DashboardView/DashboardView';
import ModalManager from './components/Modal/ModalManager';

// Styles
import './App.css';
import './styles/Modal.css';

const store = createStore(rootReducer);

function App(props) {

  return (
      <Provider store={store}>
        <div className="App">
          <DashboardView />
        </div>
        <ModalManager />
      </Provider>
      );
}

export default App;
