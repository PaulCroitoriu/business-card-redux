export default (state=[{name: "Paul"}], action) => {

    switch ( action.type) {
        case 'FETCH_POSTS':
            return action.payload;
        default:
            return state;
    }
}