import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Layout from './Components/LayoutArea/Layout/Layout';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { appStore } from './Redux/Store';
import { disableReactDevTools } from "@fvilers/disable-react-devtools"
import { interceptors } from './Utils/Interceptors';
import { useEffect } from 'react';

if (process.env.NODE_ENV === "production") disableReactDevTools()
const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

interceptors.listen();

root.render(
    <BrowserRouter>
        <Provider store={appStore}>
            <Layout />
        </Provider>
    </BrowserRouter>
);


reportWebVitals();
