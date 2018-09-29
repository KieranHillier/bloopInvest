import React, { Component } from "react";
import { 
    View,
    StyleSheet
} from "react-native";
import { Container, Content, Button, Text } from 'native-base'
import { connect } from 'react-redux'

class SignInScreen extends Component {

    state = {
        text: "hello", 
        userName: "Kieran123",
        email: "asd@asd.com",
    }

    changeToJordan = () => {

    }

    render() {
        const { text } = this.state
        return (
            <Container style={styles.container}>
                <Content>
                    <Text>{text}</Text>
                    <Button onPress={() => this.changeToJordan()}>
                        <Text>Press me!</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}
export default connect()(SignInScreen);

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});