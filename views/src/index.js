import React, {Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
// import App from './App';
import store from './StateManager/store'

const root = ReactDOM.createRoot(document.getElementById('root'));

const LazyApp = React.lazy(()=>import('./App'))
root.render(
    // <Provider store={store}>
    //     <App />
    // </Provider>
    <>
        <Suspense fallback={<div>Loading...</div>}>
            <Provider store={store}>
                <LazyApp/>
            </Provider>
        </Suspense>
    </>
);
