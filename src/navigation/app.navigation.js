import { createDrawerNavigator } from 'react-navigation'
import SignInScreen from '../screens/SignInScreen'
import SignUpScreen from '../screens/signup/SignUpScreen'
import BottomTabNavigator from './main.bottomTabs'

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

const BottomTab = {
    screen: BottomTabNavigator,
    navigationOptions: {
        header: null
    }
}

const config = {
    initialRouteName: 'BottomTab'
}

const DrawerNav = createDrawerNavigator({
    SignIn,
    SignUp,
    BottomTab
}, config)

export default DrawerNav