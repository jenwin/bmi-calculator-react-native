import React, { Component } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet
} from 'react-native';

class BmiButton extends Component {
  render() {
    const { heightFeet, heightInches, weightPounds, calcBmi } = this.props;
    const disabled = (heightFeet === "" || heightInches  === "" || weightPounds === "" ? true : false);

    return (
      <View>
        <TouchableOpacity
          style={styles.button}
          disabled={disabled}
          onPress={() => calcBmi()}>
            <Text style={styles.buttonText}>
               Calculate
            </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#87ceeb',
    borderRadius: 8,
    marginTop: 45,
    width: '75%'
  },
  buttonText: {
    fontFamily: 'Poppins-Bold',
    letterSpacing: 2.5,
    padding: 15,
    textAlign: 'center'
  }
});

export default BmiButton;