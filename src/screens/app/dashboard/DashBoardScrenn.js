import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";
import { connect } from 'react-redux'

class DashBoardScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>DashBoardScreen</Text>
                <Text>{this.props.authUser}</Text>
            </View>
        );
    }
}

const mapStateToProps = state => ({
    authUser: state.authUser.email
    // userID: state.userID,
})

export default connect(mapStateToProps)(DashBoardScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});