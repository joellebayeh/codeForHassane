import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ArticlesScreen = props => {
  console.log(props);
  return (
    <View style={styles.container}>
      <Text>Articles screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});

export default ArticlesScreen;
