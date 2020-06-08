import React from 'react';
import {View, StyleSheet, Text} from 'react-native';


const SettingScreen = () => {
  return (
    <View style={styles.settingsContainer}>
      <Text style={{color: 'black', fontSize: 40}}>Welcome to Settings</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  settingsContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SettingScreen;
