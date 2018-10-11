import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

class PortfolioScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>PortfolioScreen</Text>
            </View>
        );
    }
}
export default PortfolioScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});