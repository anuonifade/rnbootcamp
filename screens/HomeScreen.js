import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Home = () => {
  return (
    <View style={styles.homeContainer}>
      <Text style={{color: 'black', fontSize: 40}}> Home Page</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Home;
