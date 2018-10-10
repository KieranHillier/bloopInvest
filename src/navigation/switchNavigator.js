import {createSwitchNavigator} from 'react-navigation'
import AuthLoadingScreen from '../screens/authLoading/AuthLoadingScreen'
import AuthStackNavigator from './authStackNavigator'

const SwitchNavigator = createSwitchNavigator({
    AuthLoading: AuthLoadingScreen,
    Auth: AuthStackNavigator
})

export default SwitchNavigator