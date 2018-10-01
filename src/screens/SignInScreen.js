import React, { Component } from "react";
import { 
    View,
    StyleSheet
} from "react-native";
import { Container, Content, Button, Text } from 'native-base'
import { connect } from 'react-redux'

class SignInScreen extends Component {



    // state = {
    //     text: "hello", 
    //     userName: "Kieran123",
    //     email: "asd@asd.com",
    // }

    // changeToJordan = () => {
    //     this.props.dispatch({ type: 'JORDAN', text})
    // }

    render() {
        return (
            <Container style={styles.container}>
                <Content>
                    <Text>{this.props.user}</Text>
                    <Button onPress={() => this.props.increaseCounter()}>
                        <Text>Press me!</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}

const mapStateToProps = state => ({
    user: state.user
})

const mapDispatchToProps = dispatch => ({
    increaseCounter: () => dispatch({type: 'INCREASE_COUNTER'})
})

export default connect(mapStateToProps, mapDispatchToProps)(SignInScreen);

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});