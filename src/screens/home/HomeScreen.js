import React, { Component } from "react";
import { 
    View,
    StyleSheet,
    Text,
    Button,
    TextInput,
    TouchableOpacity,
    ScrollView,
    KeyboardAvoidingView,
    Dimensions,
} from "react-native"
import { connect } from 'react-redux'


class HomeScreen extends Component {

    constructor() {
        super()

    }

   

    render() {
        return (   
            <View style={styles.body}>   
                <Text>Home Screen</Text>
                <Text>{this.props.authUser}</Text>
            </View>
        );
    }
}

const mapStateToProps = state => ({
    authUser: state.authUser.email
    // userID: state.userID,
})

export default connect(mapStateToProps)(HomeScreen);

const styles = StyleSheet.create({
    body: {
        
       flex: 1
    }
});