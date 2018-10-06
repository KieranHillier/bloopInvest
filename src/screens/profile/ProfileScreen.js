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


class ProfileScreen extends Component {

    constructor() {
        super()

    }

   

    render() {
        return (   
            <View style={styles.body}>   
                <Text>Profile Screen</Text>
            </View>
        );
    }
}

export default ProfileScreen;

const styles = StyleSheet.create({
    body: {
        
       flex: 1
    }
});