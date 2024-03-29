export const initialState = {
    Basket: [],
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item]
            }
        default:
            break
    }
}

export default reducer;
