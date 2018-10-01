export default userID = (state = {name: "userID"}, action) => {
    switch(action.type) {
        case 'INCREASE_COUNTER':
            return "meme"
        default: 
            return state
    }
}
