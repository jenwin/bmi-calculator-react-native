import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet
} from 'react-native';

class Weight extends Component {
  render() {
    const { weightPounds, handleBmi } = this.props;

    return (
      <View style={styles.inputContainer}>
        {/*weight in pounds*/}
        <Text style={styles.inputLabels}>
          Weight
        </Text>
        <TextInput
          placeholder="Pounds"
          name="weightPounds"
          autoComplete="off"
          keyboardType="numeric"
          value={weightPounds}
          onChangeText={(value) => handleBmi('weightPounds', value)}
          style={styles.input}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    position: 'relative',
    left: 49,
    width: '100%'
  },
  inputLabels: {
    color: '#fff',
    fontFamily: 'Poppins-Regular',
    marginBottom: 6
  },
  input: {
    backgroundColor: '#eee',
    borderRadius: 5,
    height: 40,
    paddingLeft: 8,
    width: '75%'
  }
});

export default Weight;