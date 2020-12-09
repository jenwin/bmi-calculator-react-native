import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput
} from 'react-native';

class Height extends Component {
  render(){
    const { heightFeet, heightInches, handleBmi } = this.props;

    return (
      <View style={styles.inputContainer}>
        {/*height in feet*/}
        <Text style={styles.inputLabels}>
          Height
        </Text>
        <TextInput
          placeholder="Feet"
          name={"heightFeet"}
          autoComplete="off"
          keyboardType="numeric"
          value={heightFeet}
          onChangeText={(value) => handleBmi('heightFeet', value)}
          style={[styles.input, styles.feet]}
        />

        {/*height in inches*/}
        <TextInput
          placeholder="Inches"
          name="heightInches"
          autoComplete="off"
          keyboardType="numeric"
          value={heightInches}
          onChangeText={(value) => handleBmi('heightInches', value)}
          style={[styles.input, styles.inches]}
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
    marginBottom: 7
  },
  input: {
    backgroundColor: '#eee',
    borderRadius: 5,
    height: 40,
    paddingLeft: 8,
    width: '75%'
  },
  feet: {
    marginBottom: 4.5
  },
  inches: {
    marginBottom: 25
  }
});

export default Height;