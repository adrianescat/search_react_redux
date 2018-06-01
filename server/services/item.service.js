import fetch from 'node-fetch';
import { assign } from 'lodash';
import { apiUrls } from '../config/server.config';
import { find, map } from 'lodash';


/*
 --- getItems ------------------------------------------------------------------------
*/

export const getItems = function(query){
    return fetch(apiUrls.getItems(query))
        .then(res => res.json())
        .then(response => {
            let arrayOfItems = response.results.slice(0,4); //Me quedo solo con los 4 primeros com ose pidió.         
            let mappedItems = arrayOfItems.map( item => parseItemData(item, true));
            let categories = getCategories(response);
            return {items: mappedItems, categories: categories};
        })
};

const getCategories = function(response){
    if(!response.filters) {
        return [];
    }

    let filterCategory = find(response.filters, (filter) => filter.id === 'category');

    if (!filterCategory) {
        return [];
    }

    let categories = map(filterCategory.values[0].path_from_root, (path) => {
        return path.name;
    });

    return categories;
}

/*
 --- getItemInfo ------------------------------------------------------------------------
*/

export const getItemInfo = function(id){
    //En este caso puedo usar Promise.all ya que ninguna apiCall dependen de la otra
    let apiCalls = [getItemFromMeli(id), getItemDescriptionFromMeli(id)];
    return Promise.all(apiCalls)
        .then( function(responses){
            let item = parseItemData(responses[0]); //item info
            let description = responses[1]; //item description
            item.description = description.plain_text;
            return item;
        });
}


const getItemFromMeli = function(id) {
    return fetch(apiUrls.getItem(id))
        .then(res => res.json());
}

const getItemDescriptionFromMeli = function(id) {
    return fetch(apiUrls.getItemDescription(id))
        .then(res => res.json());
}

/*
 ----------------------------------------------------------------------------------------
*/


const parseItemData = function(data, listType=false) {
    let item = {};

    item.id = data.id;
    item.title = data.title;

    let dec = (data.price % 1).toFixed(2).split('.')[1];
    item.price = {
        currency: '$',
        amount: parseInt(data.price).toString().replace(/\B(?=(\d{3})+(?!\d))/g, "."),
        decimals: dec !== '00' ? dec : null
    }

    item.picture = listType ? data.thumbnail : resolvePictures(data.pictures);

    item.condition = data.condition === 'new' ? 'Nuevo' : 'Usado'; //voy a dejarlo así por simplicidad
    item.free_shipping = data.shipping.free_shipping;
    item.address = data.address ? data.address.state_name : null;

    if (!listType) {
        item.sold_quantity = data.sold_quantity;
    }

    return item;
}

const resolvePictures = function(arrayPictures) {
    if (!arrayPictures || arrayPictures.length == 0) {
        return apiUrls.imagePlaceholder;
    }

    //Solo para testear me voy a quedar con la primer imagen
    //Sino podríamos iterar el array y quedarnos con la más grande para la VIP.
    return arrayPictures[0];
}