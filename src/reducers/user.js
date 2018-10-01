const user = (state = "say", action) => {
    switch(action.type) {
        case 'INCREASE_COUNTER':
            return "meme" 
        default: 
            return state
    }
}

export default user
