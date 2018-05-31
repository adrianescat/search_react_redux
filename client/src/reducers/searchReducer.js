const INITIAL_STATE = {
    items:[],
    categories:[],
    author: {},
    isFetching: false,
    error: null
}

export const searchReducer = (currentState = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'FETCH_ITEMS_REQUEST':
            return {
                ...currentState,
                items: [],
                categories:[],
                author: {},
                isFetching: true,
                error: null
            }
        case 'FETCH_ITEMS_SUCCESS':
            return {
                ...currentState,
                items: action.items,
                categories: action.categories,
                author: action.author,
                isFetching: false,
                error: null
            }
        case 'FETCH_ITEMS_FAILED':
            return {
                ...currentState,
                items: [],
                isFetching: false,
                error: action.error
            }
        default:
            return currentState;
    }
}