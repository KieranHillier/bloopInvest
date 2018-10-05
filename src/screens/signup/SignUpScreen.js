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
import firebase from 'react-native-firebase'
import { connect } from 'react-redux'
import { changeName } from '../../actions'


class SignUpScreen extends Component {

    constructor() {
        super()
        this.ref = firebase.auth()
        this.db = firebase.firestore()
        this.email = 'test7@teat.com'
        this.fullName = 'bob hillier'
        this.userName = 'koolkid7'
        this.password = 'asdasd'
    }

    signUpUser = () => {
        let email = "meme@test.com"
        let password = "megameme"
        this.ref.createUserAndRetrieveDataWithEmailAndPassword(this.email, this.password)
            .then((user) => {
                console.log(user.user._user)
                let newUID = user.user._user.uid
                this.db.collection('users').doc(newUID).set({
                    name: this.fullName,
                    username: this.userName,
                    email: this.email,
                    activity: {
                        test: "test"
                    }
                })

                this.db.collection('userList').doc(this.userName).set({
                    uid: newUID
                })
            })
            .then(() => {
                //navigate to home 
            })
            .catch((error) => {alert(error)})
    }

    EmailChange = (email) => this.email = email;
    FullNameChange = (fullName) => this.fullName = fullName;
    UserNameChange = (userName) => this.userName = userName;
    PasswordChange = (password) => this.password = password;

    changeTheName = () => {
        this.props.dispatch(changeName())
    }

    render() {
        return (
            <ScrollView style={styles.scroll} contentContainerStyle={{flex: 1}}>     
                  <View style={styles.body}>          
                      <View style={styles.bodyForeground}>
                          <Text style={styles.title}>{this.props.userID}</Text>
                          <View style={styles.topBodyContainer}>
                              <Text style={styles.topBodyText}>Sign up with:</Text>
                          </View>
                          <TextInput style={styles.textInput} placeholder="Username" placeholderTextColor='#080C2E' onChangeText={this.UserNameChange}/>   
                          <TextInput style={styles.textInput} placeholder="Name" placeholderTextColor='#080C2E' onChangeText={this.FullNameChange}/> 
                          <TextInput style={styles.textInput} placeholder="Email" placeholderTextColor='#080C2E' onChangeText={this.EmailChange}/> 
                          <TextInput style={styles.textInput} placeholder="Password" placeholderTextColor='#080C2E' onChangeText={this.PasswordChange}/> 
                          <TouchableOpacity style={styles.button} onPress={this.signUpUser}>
                              <Text style={styles.btnText}>Sign Up</Text>
                          </TouchableOpacity>
                          <TouchableOpacity style={styles.button} onPress={() => this.changeTheName()}>
                              <Text style={styles.btnText}>{this.props.user}</Text>
                          </TouchableOpacity>
                          <TouchableOpacity style={styles.footer} onPress={() => this.props.navigation.navigate('SignIn')}>
                              <Text style={styles.footerText}>Already have an account? <Text style={styles.footerTextAction}>Sign in!</Text></Text>
                          </TouchableOpacity>
                      </View>
                  </View>
            </ScrollView>
            
          );
    }
}

const mapStateToProps = state => ({
    userID: state.userID,
    user: state.user
})

// const mapDispatchToProps = dispatch => ({
//     changeName: () => dispatch(changeName())
// })

export default connect(mapStateToProps)(SignUpScreen);

const styles = StyleSheet.create({
    scroll: {
        flex:1,
        backgroundColor: 'black',
    },
    title: {
        fontSize: 65,
        color: '#080C2E',
        textAlign: 'center'
    },
    body: {
        flex: 1,
        //300
        // height: '70%',
        backgroundColor: 'white',
        justifyContent: 'center',
    },
    bodyForeground: {
        paddingHorizontal: 30,
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