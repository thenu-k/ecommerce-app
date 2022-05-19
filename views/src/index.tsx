import React, {Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import LoadingScreen from './Models/LoadingScreen/LoadingScreen';
import store from './StateManager/store'

const root = ReactDOM.createRoot(document.getElementById('root')!);  //Added any type

const App = React.lazy(()=>import('./App'))

root.render(
    <>
        <Suspense fallback={<LoadingScreen/>}>
            <Provider store={store}>
                <App/>
            </Provider>
        </Suspense>
    </>
);
