export const userReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SET_USER':
            if (action.user) {
                return action.user
            }
        case 'LOGOUT':
            return {}
        default:
            return state
    }
}