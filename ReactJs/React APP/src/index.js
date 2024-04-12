import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import { createRoot } from 'react-dom/client';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { Provider } from 'react-redux';
import { configureStore } from './store.js';


const container = document.getElementById('root');
const root = createRoot(container);

const store = configureStore();
const persistor = persistStore(store);

root.render(
<Provider store= { store }>
    <PersistGate 
    loading={ <div>loading...</div>} 
    persistor={ persistor }>
       <App />
    </PersistGate>
</Provider>
);