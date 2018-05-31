export const author = {
    name: 'Adrián',
    lastname: 'Escat'
}

export const apiUrls = {
    getItem,
    getItems,
    getItemDescription,
    imagePlaceholder: 'http://via.placeholder.com/600x600'
}


function getItems(query){
    return `https://api.mercadolibre.com/sites/MLA/search?q=${query}`;
}

function getItem(id) {
    return `https://api.mercadolibre.com/items/${id}`;
}

function getItemDescription(id) {
    return `https://api.mercadolibre.com/items/${id}/description`;
}