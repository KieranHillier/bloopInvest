const user = {
    name: "asd",
    userName: "asd",
    email: "asd@email.com",
}

const authUser = (state = user, action) => {
    switch(action.type) {
        case 'STORE_USER':
            return { ...state, 
                name: action.user.fullName,
                userName: action.user.userName,
                email: action.user.email
            }
        default: 
            return state
    }
}

export default authUser