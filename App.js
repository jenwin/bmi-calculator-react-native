import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  View,
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView } from 'react-native';
import UserResults from './components/UserResults';
import BmiNumber from './components/BmiNumber';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heightFeet: "",
      heightInches: "",
      weightPounds: "",
      results: "",
      fontLoaded: false
    }
  }

  handleBmi = (name, value) => {
    this.setState({
      [name]: value
    });
  }

  calcBmi() {
    const { heightFeet, heightInches, weightPounds } = this.state;
    const numHeightFeet = Number(heightFeet);
    const numHeightInches = Number(heightInches);
    const numWeightPounds = Number(weightPounds);
    const addAllHeight = ((numHeightFeet * 12) + numHeightInches);
    //total height in meters
    const totalHeight = Math.pow((addAllHeight) * 0.0254, 2);
    //total weight in kg
    const totalWeight = (numWeightPounds * 0.45);
    //total bmi
    const totalBMI = (totalWeight/totalHeight).toFixed(1);
    this.setState({
      results: totalBMI
    });
  }

  async componentDidMount() {
    await Expo.Font.loadAsync({
      'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
      'Poppins-Bold': require('./assets/fonts/Poppins-Bold.ttf')
    });
    this.setState({
      fontLoaded: true
    });
  }

  render() {
    const { heightFeet, heightInches, weightPounds, results, fontLoaded } = this.state;
    const disabled = (heightFeet === "" || heightInches  === "" || weightPounds === "" ? true : false);

    if (!fontLoaded) {
      return (
        <View style={styles.fontLoaded}>
          <Text>Sorry, unable to load. Please try again later.</Text>
        </View>
      );
    }

    return (
      <TouchableWithoutFeedback
        onPress={() => { Keyboard.dismiss(); }}>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : null}
            style={styles.container}>
              <Text style={styles.title}>BMI Calculator</Text>

              <BmiNumber getResults={results} />
              <UserResults getResults={results} />

              {/*height in feet*/}
              <Text style={styles.inputLabels}>
                Height
              </Text>
              <TextInput
                placeholder="Feet"
                name={"heightFeet"}
                autoComplete="off"
                keyboardType="numeric"
                value={this.state.heightFeet}
                onChangeText={(value) => this.handleBmi('heightFeet', value)}
                style={[styles.input, styles.feet]}
              />

              {/*height in inches*/}
              <TextInput
                placeholder="Inches"
                name="heightInches"
                autoComplete="off"
                keyboardType="numeric"
                value={this.state.heightInches}
                onChangeText={(value) => this.handleBmi('heightInches', value)}
                style={[styles.input, styles.inches]}
              />

              {/*weight in pounds*/}
              <Text style={styles.inputLabels}>
                Weight
              </Text>
              <TextInput
                placeholder="Pounds"
                name="weightPounds"
                autoComplete="off"
                keyboardType="numeric"
                value={this.state.weightPounds}
                onChangeText={(value) => this.handleBmi('weightPounds', value)}
                style={styles.input}
              />

              {/*calculate bmi button*/}
              <TouchableOpacity
                style={styles.button}
                disabled={disabled}
                onPress={() => this.calcBmi()}>
                  <Text style={styles.buttonText}>
                    Calculate
                  </Text>
              </TouchableOpacity>
          </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  fontLoaded: {
    paddingLeft: 50.5,
    paddingTop: 320
  },
  container: {
    alignItems: 'center',
    backgroundColor: '#000',
    flex: 1,
    justifyContent: 'center'
  },
  title: {
    color: '#fff',
    fontFamily: 'Poppins-Bold',
    fontSize: 21,
    letterSpacing: 1.8
  },
  inputLabels: {
    color: '#fff',
    fontFamily: 'Poppins-Regular',
    marginBottom: 6,
    position: 'relative',
    right: 115
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
  },
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

export default App;