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


class HomeScreen extends Component {

    constructor() {
        super()

    }

   

    render() {
        return (   
            <View style={styles.body}>   
                <Text>Home Screen</Text>
            </View>
        );
    }
}

export default HomeScreen;

const styles = StyleSheet.create({
    body: {
        
       flex: 1
    }
});