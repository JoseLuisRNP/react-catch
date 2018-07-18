import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';

import './css/style.css';
import StorePicker from './components/StorePicker';
import App from './components/App';
import NotFound from './components/NotFound';

//Router del index (enlaces de la web)
const Root = () => {
    return (
        <BrowserRouter>
            <div>
                <Match exactly pattern='/' component={StorePicker} />{/*Pattern= La ruta a indicar Component= componente a mostrar*/}
                <Match pattern='/store/:storeId' component={App} />
                <Miss component={NotFound} /> {/*Si no se encuentra la ruta*/}
            </div>
        </BrowserRouter>
    )
}
render(<Root/>, document.querySelector('#main'));