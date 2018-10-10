import { createStackNavigator } from 'react-navigation'
import SignInScreen from '../screens/SignInScreen'
import SignUpScreen from '../screens/signup/SignUpScreen'

const AuthStackNavigator = createStackNavigator({
    SignIn: SignInScreen,
    SignUp: SignUpScreen
})

export default AuthStackNavigator