import { wrapperUrls } from '../config/client.config';

export const fetchItems = (query) => {
    return (dispatch) => {
        dispatch(fetchItemsRequest());
        // Returns a promise
        return fetch(wrapperUrls.getItems(query))
            .then(response => {
                if(response.ok){
                    response.json().then(data => {
                        dispatch(fetchItemsSuccess(data));
                    })
                } else{
                    response.json().then(error => {
                        dispatch(fetchItemsFailed(error));
                    })
                }
            })
    }
}

export const fetchItemsRequest = () => {
    return {
        type:'FETCH_ITEMS_REQUEST'
    }
}


export const fetchItemsSuccess = (data) => {
    return {
        type: 'FETCH_ITEMS_SUCCESS',
        items: data.items,
        categories: data.categories,
        author: data.author,
        receivedAt: Date.now
    }
}

export const fetchItemsFailed = (error) => {
    return {
        type:'FETCH_ITEMS_FAILED',
        error
    }
}