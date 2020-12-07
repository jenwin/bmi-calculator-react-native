import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

class UserReults extends Component {
  render() {
    const { getResults } = this.props;

    function showStrBmi() {
      if (getResults === "") {
        return 'Please Enter Your Info';
      } else if (getResults < 18.5) {
        return 'You are underweight.';
      } else if (getResults >= 18.5 && getResults <= 24.9) {
        return 'You are healthy!';
      } else if (getResults >= 25 && getResults <= 29.9) {
       return 'You are overweight.';
      } else if (getResults >= 30) {
       return 'You are obese.';
      }
    }

    return (
      <View
        style={styles.results}>
          <Text
            style={styles.resultsText}>
              { showStrBmi() }
          </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  results: {
    paddingBottom: 30
  },
  resultsText: {
    color: '#fff',
    fontFamily: 'Poppins-Regular',
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});

export default UserReults;