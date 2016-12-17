import '../css/app.scss';
import { Api } from '../../api/ApiService';
import App from './AppComponent';
import AppStores from '../../common/AppStores';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import React from 'react';
import ItemCategoryFormComponent from '../../item-category/js/ItemCategoryFormComponent';
import 'script!jquery'
import 'script!foundation-sites'
const GDS_API = process.env.GDS_API || 'https://demo-gds-api.herokuapp.com/gds';
$(document).foundation();
String.prototype.hashCode = function () {
    let hash = 0;
    if (this.length == 0) return hash;
    for (let i = 0; i < this.length; i++) {
        let char = this.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash; // Convert to 32bit integer
    }
    return hash;
}

/*
new Api().init(GDS_API, err => {
    if (!err) {
        ReactDOM.render(<Provider store={AppStores}><ItemCategoryFormComponent /></Provider>, document.getElementsByTagName('app')[0]);
    }
    else {
        console.error(err);
    }
});
*/
ReactDOM.render(<Provider store={AppStores}><ItemCategoryFormComponent /></Provider>, document.getElementsByTagName('app')[0]);