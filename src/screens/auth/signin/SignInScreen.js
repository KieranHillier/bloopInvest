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
    Dimensions
} from "react-native"
import { Container, Content, Form, Item, Input } from 'native-base'
import { connect } from 'react-redux'
import { increaseCounter } from '../../../actions'

class SignInScreen extends Component {

    render() {
        return (
          <ScrollView style={styles.scrollView} contentContainerStyle={{flex: 1}}>
                <View style={styles.body}>
                    <View style={styles.bodyForeground}>
                        <Text style={styles.title}>AQUIRE.</Text>
                        <Text style={styles.title}>{this.props.user}</Text>
                        <View style={styles.topBodyContainer}>
                            <Text style={styles.topBodyText}>Sign in with:</Text>
                        </View>
                        <TextInput style={styles.textInput} placeholder="Username" placeholderTextColor='#080C2E' />   
                        <TextInput style={styles.textInput} placeholder="Password" placeholderTextColor='#080C2E' /> 
                        <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('App')}>
                            <Text style={styles.btnText}>Sign In</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.footer} onPress={() => this.props.navigation.navigate('SignUp')}>
                            <Text style={styles.footerText}>Don't have an account? <Text style={styles.footerTextAction}>Sign up!</Text></Text>
                        </TouchableOpacity>
                    </View>
                </View>
          </ScrollView>
          
        );
    }
}

const mapStateToProps = state => ({
    user: state.user
})

const mapDispatchToProps = dispatch => ({
    increaseCounter: () => dispatch(increaseCounter())
})

export default connect(mapStateToProps, mapDispatchToProps)(SignInScreen);

const styles = StyleSheet.create({
    scrollView: {
        //pretty sure i dont need this
        flex: 1,
    },
    title: {
        fontSize: 65,
        color: '#080C2E',
        textAlign: 'center'
    },
    body: {
        // flex: 4,
        //300
        flex: 1,
        // height: '50%',
        backgroundColor: 'white',
        justifyContent: 'center',
    },
    bodyForeground: {
        paddingHorizontal: 30
    },
    topBodyContainer: {
        alignItems: 'center',
        marginBottom: 12
    },
    topBodyText: {
        color: '#080C2E',
        marginTop: 25
    },
    textInput: {
        borderColor: '#080C2E',
        borderWidth: 1,
        borderRadius: 6,
        marginTop: 5,
        color: '#080C2E',
        paddingLeft: 18,
        height: 45,
    },
    button: {
        marginTop: 20,
        alignItems: 'center',
        backgroundColor: '#080C2E',
        borderRadius: 6,
        padding: 12,
        height: 45
    },
    btnText: {
        color: 'white'
    },
    footer: {
        marginTop: 20,
        alignItems: 'center',
        borderTopWidth: 1,
        padding: 12,
        height: 45
    },
    footerText: {
        color: '#080C2E'
    },
    footerTextAction: {
        fontWeight: 'bold',
        textDecorationLine: 'underline'
    }
});