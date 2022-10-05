
const userReducer = (state, action) => {
    switch (action.type){

    case 'LOAD_RESULT':
        return { ...state, visibility: action.payload, username: action.username};
    case 'LOAD_USER':
        return { ...state, visibility: action.payload, username: action.username}
    }
}

export default userReducer
