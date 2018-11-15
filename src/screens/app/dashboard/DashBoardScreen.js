import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";
import { connect } from 'react-redux'
import firebase from 'react-native-firebase'
import { VictoryBar, VictoryChart, VictoryTheme, VictoryLine } from 'victory-native'

const data = [
    { quarter: 1, earnings: 3000 },
    { quarter: 2, earnings: 16500 },
    { quarter: 3, earnings: 14250 },
    { quarter: 4, earnings: 50000 }
  ];

class DashBoardScreen extends Component {

    constructor() {
        super()

        this.state = {
            featuredStocks: '',
        }
        this.ref = firebase.firestore().collection('stocks')
    }

    componentWillMount() {

        this.ref.doc('MSFT').get().then((doc) => {
            if (doc.exists) {
                console.log(doc.data().closingPrice)
                this.setState({
                    featuredStocks: doc.data().closingPrice
                })
                console.log(this.state.featuredStocks)

            } else {
                console.log('No data');
            }
        })
        .catch((err) => {
            console.log(err)
        })

        
    }

    render() {

        const { featuredStocks } = this.state

        return (
            <View style={styles.container}>
            <VictoryChart>
                <VictoryLine
                    data={[
                    { x: 1, y: 2 },
                    { x: 2, y: 3 },
                    { x: 3, y: 5 },
                    { x: 4, y: 4 },
                    { x: 5, y: 6 }
                    ]}
                />
            </VictoryChart>
                
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
        justifyContent: 'center',
        backgroundColor: 'white'
    }
});