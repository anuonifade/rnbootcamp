import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const AboutScreen = () => {
  return (
    <View style={styles.aboutContainer}>
      <Text style={{color: 'black', fontSize: 40}}>About Us</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  aboutContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default AboutScreen;
