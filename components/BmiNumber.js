import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

class BmiNumber extends Component {
  render() {
    const { getResults } = this.props;

    if (getResults === "") {
      return (
        <View style={styles.bmiNumber}>
          <Text style={styles.yourBmi}>
            What is your BMI?
          </Text>
        </View>
      )
    } else {
      return (
        <View style={styles.bmiNumber}>
          <Text style={styles.bmiNumberText}>
            { getResults }
          </Text>
        </View>
      )
    }
  }
}

const styles = StyleSheet.create({
  yourBmi: {
    color: '#fff',
    fontFamily: 'Poppins-Regular',
    fontSize: 21,
    letterSpacing: 0.5,
    textAlign: 'center'
  },
  bmiNumber: {
    backgroundColor: '#000',
    borderRadius: 8,
    height: '5.5%',
    justifyContent: 'center',
    marginBottom: 15,
    marginTop: 40,
    width: '75%'
  },
  bmiNumberText: {
    color: '#fff',
    fontFamily: 'Poppins-Bold',
    fontSize: 21,
    letterSpacing: 0.5,
    textAlign: 'center'
  }
});

export default BmiNumber;