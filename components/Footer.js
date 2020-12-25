import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

const Footer = () => {
  return (
    <View>
      <Text
        style={styles.author}>
          © JENNIFER NGUYEN
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  author: {
    color: '#fff',
    fontSize: 11,
    letterSpacing: 1.5,
    opacity: 0.8,
    position: 'relative',
    top: 112
  }
});

export default Footer;