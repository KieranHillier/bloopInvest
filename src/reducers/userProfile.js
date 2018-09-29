const userProfile = (state = "Kieran123", action) => {
    switch(action.type){
        case 'TREVOR':
            return "trevormeme"
        case 'JORDAN': 
            return "jordanmeme"
        default:
            return state
    }
}

export default userProfile