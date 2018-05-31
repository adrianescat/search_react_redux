export const wrapperUrls = {
    getItem,
    getItems
}

function getItem(id) {
    return  `http://localhost:3001/api/items/${id}`;
}

function getItems(query){
    return `http://localhost:3001/api/items?q=${query}`;
}