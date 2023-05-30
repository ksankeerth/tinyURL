import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './app/App';
import ErrorBoundary from './app/components/common/ErrorBoundary';
import { store } from './app/state/store';
import './app/styles/index.scss';

const element = document.getElementById('root');

function Root() {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </ErrorBoundary>
  );
}

if (element) {
  createRoot(element).render(<Root />);
}
