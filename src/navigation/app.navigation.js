import { createDrawerNavigator } from 'react-navigation'
import SignInScreen from '../screens/SignInScreen'
import SignUpScreen from '../screens/signup/SignUpScreen'

const SignIn = {
    screen: SignInScreen,
    navigationOptions: {
        header: null
    }
}

const SignUp = {
    screen: SignUpScreen,
    navigationOptions: {
        header: null
    }
}

const config = {
    initialRouteName: 'SignUp'
}

const DrawerNav = createDrawerNavigator({
    SignIn,
    SignUp
}, config)

export default DrawerNav