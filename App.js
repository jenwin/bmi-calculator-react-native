import React, { Component } from 'react';
import useFonts from './useFonts';

import {
  StyleSheet,
  Text,
  View,
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView } from 'react-native';
import UserResults from './components/UserResults';
import BmiNumber from './components/BmiNumber';
import Height from './components/Height';
import Weight from './components/Weight';
import BmiButton from './components/BmiButton';
import Footer from './components/Footer';

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

  calcBmi = () => {
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

  async loadFonts() {
      await useFonts();
      this.setState({
        fontLoaded: true
    });
  }

  async componentDidMount() {
    this.loadFonts();
  }

  render() {
    const { heightFeet, heightInches, weightPounds, results, fontLoaded } = this.state;

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

              {/*height in feet and inches*/}
              <Height
                heightFeet={heightFeet}
                heightInches={heightInches}
                handleBmi={this.handleBmi}
              />

              {/*weight in pounds*/}
              <Weight
                weightPounds={weightPounds}
                handleBmi={this.handleBmi}
              />

              {/*calculate bmi button*/}
              <BmiButton
                heightFeet={heightFeet}
                heightInches={heightInches}
                weightPounds={weightPounds}
                calcBmi={this.calcBmi}
              />

              <Footer />
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
  }
});

export default App;